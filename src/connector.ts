import axios, { AxiosResponse } from 'axios';
import { RawEsoStatus, Slug } from '@eso-status/types';
import ServiceAlertsUrl from './const';
import Raw from './raw';

export default class Connector {
  private raw: string[] = [];

  public rawEsoStatus: RawEsoStatus[] = [];

  private rawContent: string;

  private alreadyGet: Slug[] = [];

  constructor(private readonly remoteContent: string) {
    if (!this.remoteContent) {
      return;
    }

    this.isolate();
    this.split();
    this.get();
  }

  public static async getRemoteContent(): Promise<string> {
    const response: AxiosResponse<string> =
      await axios.get<string>(ServiceAlertsUrl);

    return response?.status === 200 && !!response?.data
      ? String(response?.data)
      : '';
  }

  private isolate(): void {
    this.rawContent = this.remoteContent
      .split('<!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->')[1]
      .split('</div>')
      .shift();
  }

  private split(): void {
    this.rawContent.split('<hr />').forEach((raw: string): void => {
      this.raw.push(raw);
    });
  }

  private get(): void {
    this.raw.forEach((raw: string): void => this.getEach(raw));
  }

  private getEach(raw: string): void {
    new Raw(raw).matches.forEach((match: RawEsoStatus): void =>
      this.populateRawEsoStatus(match),
    );
  }

  private populateRawEsoStatus(match: RawEsoStatus): void {
    if (this.alreadyGet.includes(match.slugs[0])) {
      return;
    }
    this.rawEsoStatus.push(match);
    this.alreadyGet.push(match.slugs[0]);
  }
}
