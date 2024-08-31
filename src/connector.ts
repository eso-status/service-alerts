import axios, { AxiosResponse } from 'axios';
import { RawEsoStatus, Slug } from '@eso-status/types';
import StatusIdentifier from './identifier/status.identifier';
import DateFormatter from './formatter/date.formatter';
import ServiceAlertsUrl from './const';
import SlugsIdentifier from './identifier/slugs.identifier';
import SlugIdentifier from './identifier/slug.identifier';

export default class Connector {
  private raw: string[];

  public rawEsoStatus: RawEsoStatus[];

  private rawContent: string;

  private alreadyGet: Slug[];

  constructor(private readonly remoteContent: string) {
    this.raw = [];
    this.rawEsoStatus = [];
    this.alreadyGet = [];

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
    this.rawContent = this.remoteContent
      .split('<!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->')[1]
      .split('</div>')
      .shift();
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

  private getData(): void {
    this.raw.forEach((raw: string): void => this.generateRaw(raw));
  }

  private generateRaw(raw: string): void {
    const statusIdentifier: StatusIdentifier = new StatusIdentifier(raw);
    const dateFormatter: DateFormatter = new DateFormatter(raw);

    new SlugsIdentifier(raw).slugIdentified.forEach(
      (slugIdentify: SlugIdentifier): void => {
        const rawEsoStatus: RawEsoStatus = {
          sources: [ServiceAlertsUrl],
          raw: [raw],
          slugs: [slugIdentify.slug],
          type: slugIdentify.getType(),
          support: slugIdentify.getSupport(),
          zone: slugIdentify.getZone(),
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
        if (!this.alreadyGet.includes(slugIdentify.slug)) {
          this.rawEsoStatus.push(rawEsoStatus);
          this.alreadyGet.push(slugIdentify.slug);
        }
      },
    );
  }
}
