import axios, { AxiosResponse } from 'axios';
import { RawEsoStatus, Slug, Support, Type, Zone } from '@eso-status/types';
import { SlugIdentify } from './interface/slugIdentify.interface';
import SlugIdentifier from './identifier/slug.identifier';
import StatusIdentifier from './identifier/status.identifier';
import DateFormatter from './formatter/date.formatter';
import ServiceAlertsUrl from './const';

export default class Connector {
  private raw: string[];

  public rawEsoStatus: RawEsoStatus[];

  private rawContent: string;

  constructor(private readonly remoteContent: string) {
    this.raw = [];
    this.rawEsoStatus = [];

    if (this.remoteContent !== '') {
      this.getRawContent();
      this.getRaw();
      this.cleanRaw();
      this.getData();
    }
  }

  public static async init(): Promise<Connector> {
    return new Connector(await Connector.getRemoteContent());
  }

  private static async getRemoteContent(): Promise<string> {
    const response: AxiosResponse<string> =
      await axios.get<string>(ServiceAlertsUrl);

    return response?.status === 200 && !!response?.data
      ? String(response?.data)
      : '';
  }

  private getRawContent(): void {
    const split: string[] = this.remoteContent.split(
      '<!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->',
    );
    const split1: string[] = split[1].split('</div>');

    this.rawContent = split1.shift();
  }

  private getRaw(): void {
    this.rawContent.split('<hr />').forEach((raw: string): void => {
      this.raw.push(raw);
    });
  }

  private cleanRaw(): void {
    this.raw = this.raw.map((raw: string): string => {
      let rawReplace: string = raw.replaceAll(/\n/g, '');
      rawReplace = rawReplace.replaceAll(' </p><p>', ' ');
      rawReplace = rawReplace.replaceAll('</p><p>', ' ');
      rawReplace = rawReplace.replaceAll('  <p>', '');
      rawReplace = rawReplace.replaceAll(' </p>', '');
      rawReplace = rawReplace.replaceAll(' <p>', '');
      rawReplace = rawReplace.replaceAll('<p>', '');
      rawReplace = rawReplace.replaceAll('</p>', '');
      rawReplace = rawReplace.replaceAll('&nbsp;', '');
      return rawReplace.replaceAll('<div>', '');
    });
  }

  public getData(): void {
    const alreadyGet: Slug[] = [];
    this.raw.forEach((raw: string): void => {
      const statusIdentifier: StatusIdentifier = new StatusIdentifier(raw);
      const slugIdentifier: SlugIdentifier = new SlugIdentifier(raw);
      const dateFormatter: DateFormatter = new DateFormatter(raw);

      slugIdentifier.slugIdentified.forEach(
        (slugIdentify: SlugIdentify): void => {
          const rawEsoStatus: RawEsoStatus = {
            sources: [ServiceAlertsUrl],
            raw: [raw],
            slugs: [slugIdentify.slug],
            type: <Type>slugIdentify.slug.split('_')[0],
            support: <Support>slugIdentify.slug.split('_')[1],
            zone: <Zone>slugIdentify.slug.split('_')[2],
            status: statusIdentifier.status,
            rawSlug: slugIdentify.rawSlug,
          };

          if (dateFormatter.rawDate !== undefined) {
            rawEsoStatus.rawDate = dateFormatter.rawDate;
            rawEsoStatus.dates = dateFormatter.dates;
          }
          if (statusIdentifier.rawStatus !== undefined) {
            rawEsoStatus.rawStatus = statusIdentifier.rawStatus;
          }
          if (!alreadyGet.includes(slugIdentify.slug)) {
            this.rawEsoStatus.push(rawEsoStatus);
            alreadyGet.push(slugIdentify.slug);
          }
        },
      );
    });
  }
}
