import axios, { AxiosResponse } from 'axios';
import { RawEsoStatus, Slug } from '@eso-status/types';
import ServiceAlertsUrl from './const';
import Raw from './raw';
import Match from './match';

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
    new Raw(raw).matches.forEach((match: Match): void =>
      this.populateRawEsoStatus(match),
    );
  }

  private populateRawEsoStatus(match: Match): void {
    const rawEsoStatus: RawEsoStatus = match.getRawEsoStatus();
    if (this.alreadyGet.includes(match.slug)) {
      return;
    }
    this.rawEsoStatus.push(rawEsoStatus);
    this.alreadyGet.push(match.slug);
  }
}
