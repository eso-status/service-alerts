import axios, { AxiosResponse } from 'axios';
import { Slug } from '@eso-status/types';
import ServiceAlertsUrl from './const';
import Raw from './raw';
import { EsoStatusRawData } from './interface/esoStatusRawData.interface';

/**
 * Class for retrieving information from announcements
 */
export default class Connector {
  /**
   * List of raw data from announcements
   */
  public raw: string[] = [];

  /**
   * List of information from announcements
   */
  public rawEsoStatus: EsoStatusRawData[] = [];

  /**
   * List of slugs whose data has already been retrieved
   * @private
   */
  private alreadyGet: Slug[] = [];

  /**
   * @param remoteContent Content of the source retrieved
   */
  constructor(private readonly remoteContent: string) {
    if (!this.remoteContent) {
      return;
    }

    this.isolate();
    this.split();
    this.fetch();
  }

  /**
   * Method for creating an instance of the connector
   */
  public static async init(): Promise<Connector> {
    return new Connector(await Connector.getRemoteContent());
  }

  /**
   * Method for retrieving remote content
   * @private
   */
  private static async getRemoteContent(): Promise<string> {
    const response: AxiosResponse<string> =
      await axios.get<string>(ServiceAlertsUrl);

    return response?.status === 200 && !!response?.data
      ? String(response?.data)
      : '';
  }

  /**
   * Method for isolating the section containing the list of announcements
   * @private
   */
  private isolate(): string {
    return this.remoteContent
      .split('<!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->')[1]
      .split('</div>')
      .shift();
  }

  /**
   * Method for separating announcement blocks
   * @private
   */
  private split(): void {
    this.isolate()
      .split('<hr />')
      .forEach((raw: string): void => {
        this.raw.push(raw);
      });
  }

  /**
   * Method for analyzing each announcement
   * @private
   */
  private fetch(): void {
    this.raw.forEach((raw: string): void => this.getEach(raw));
  }

  /**
   * Method for retrieving the information contained in an announcement
   * @param raw Raw data of the announcement
   * @private
   */
  private getEach(raw: string): void {
    new Raw(raw).matches.forEach((match: EsoStatusRawData): void =>
      this.populateRawEsoStatus(match),
    );
  }

  /**
   * Method for creating the list of announcements while avoiding duplicates
   * @param match Object containing the information of a slug found in an announcement
   * @private
   */
  private populateRawEsoStatus(match: EsoStatusRawData): void {
    if (this.alreadyGet.includes(match.slug)) {
      return;
    }

    this.rawEsoStatus.push(match);
    this.alreadyGet.push(match.slug);
  }
}
