import { AxiosResponse } from 'axios';
import {
  Slug,
  RawEsoStatus,
} from '@eso-status/types';
import ServiceAlertsElement from '../classes/ServiceAlertsElement';

const axios = require('axios');

/**
 * Connector used to get data from https://help.elderscrollsonline.com/app/answers/detail/a_id/4320
 */
export default class ServiceAlertConnector {
  /**
     * URL to get remote content
     *
     * @public
     * @static
     *
     * @return string URL to get remote content
     */
  public static url = 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320';

  /**
     * Methode used to get raw content of the remote website
     *
     * @public
     * @static
     *
     * @return Promise<string> Raw content of the remote website
     */
  public static async getRemoteContent(): Promise<string> {
    // @ts-ignore
    const response: AxiosResponse<string> = await axios.get<string>(ServiceAlertConnector.url);
    if (response?.status !== 200) {
      throw new Error(`Bad response ${response?.status} (${response?.data})`);
    } else if (!response?.data) {
      throw new Error(`Empty response ${response?.status} (${response?.data})`);
    } else {
      return response?.data;
    }
  }

  /**
     * Methode used to select raw content containing eso servers status information
     *
     * @public
     * @static
     *
     * @param remoteContent Raw content of the remote website
     * @return string Raw content containing eso servers status information
     */
  public static getFilterContent(remoteContent: string): string {
    const resultRemoveBefore: string[] = remoteContent.split('<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->');
    if (resultRemoveBefore.length >= 2) {
      const resultRemoveAfter: string[] = resultRemoveBefore[1].split('<p>&nbsp;</p>');

      if (resultRemoveAfter.length >= 2) {
        return `<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->${resultRemoveAfter[0]}<p>&nbsp;</p>`;
      }
    }

    return '';
  }

  /**
     * Methode used to get list of each raw information by date
     *
     * @public
     * @static
     *
     * @param filteredContent string Raw content containing eso servers status information
     * @return string[] List of each information by date
     */
  public static changeFilterContentForList(filteredContent: string): string[] {
    return filteredContent
      .split('<hr')
      .filter((item: string): boolean => !item.includes('&nbsp;'));
  }

  /**
     * Methode used to get raw data of content list
     *
     * @public
     * @static
     *
     * @param filteredContentList string[] Raw data of content list
     * @return {raw: string, rawDate: string, rawData: string[]}[] Raw data of content list
     */
  public static getRawData(filteredContentList: string[]): {raw: string, rawDate: string, rawData: string[]}[] {
    return filteredContentList.map((item: string): {raw: string, rawDate: string, rawData: string[]} => {
      const list: string[] = item
        .split('</p>')
        .map((line: string): string => {
          let newLine: string = line;

          newLine = newLine.replace('\n', '')
            .replace('\n', '')
            .replace('</p>', '')
            .replace('<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->', '')
            .replace('<p>', '');

          return newLine;
        })
        .filter((line: string): boolean => line.length > 2);

      return {
        raw: item,
        rawDate: list[0],
        rawData: list.slice(1, list.length),
      };
    });
  }

  /**
     * Methode used to get list of split raw data of content list
     *
     * @public
     * @static
     *
     * @param rawData {raw: string, rawDate: string, rawData: string[]}[] Raw data of content list
     * @return RawEsoStatus[] Split raw data of content list
     */
  public static splitRawData(rawData: {raw: string, rawDate: string, rawData: string[]}[]): RawEsoStatus[] {
    const list: RawEsoStatus[] = [];

    rawData.forEach((item: {raw: string, rawDate: string, rawData: string[]}): void => {
      item.rawData.forEach((line: string): void => {
        list.push({
          sources: [ServiceAlertConnector.url],
          raw: [item.raw],
          rawDate: item.rawDate,
          rawData: line,
        });
      });
    });

    return list;
  }

  /**
     * Methode used to get slug of split raw data of content list
     *
     * @public
     * @static
     *
     * @param splitRawData RawEsoStatus[] Split raw data of content list
     * @return RawEsoStatus[] Split raw data of content list with slug
     */
  public static getSlugOfSplitRawData(splitRawData: RawEsoStatus[]): RawEsoStatus[] {
    return splitRawData.map((item: RawEsoStatus): RawEsoStatus => ({
      sources: item.sources,
      raw: item.raw,
      rawDate: item.rawDate,
      rawData: item.rawData,
      slugs: ServiceAlertsElement.getSlug(item.rawData ?? ''),
    }));
  }

  /**
     * Methode used to get split raw data of content list by slug
     *
     * @public
     * @static
     *
     * @param splitRawDataWithSlug RawEsoStatus[] Split raw data of content list with slug
     * @return RawEsoStatus[] Split raw data of content list by slug
     */
  public static splitRawDataList(splitRawDataWithSlug: RawEsoStatus[]): RawEsoStatus[] {
    const list: RawEsoStatus[] = [];

    splitRawDataWithSlug.forEach((item: RawEsoStatus): void => {
      item.slugs?.forEach((slug: Slug): void => {
        list.push({
          sources: item.sources,
          raw: item.raw,
          rawDate: item.rawDate,
          rawData: item.rawData,
          slugs: [slug],
        });
      });
    });

    return list;
  }

  /**
     * Methode used to get last element by slug
     *
     * @public
     * @static
     *
     * @param splitRawDataList RawEsoStatus[] Split raw data of content list by slug
     * @return RawEsoStatus[] Raw eso server status list sorted by date
     */
  public static getLastRawData(splitRawDataList: RawEsoStatus[]): RawEsoStatus[] {
    const last: string[] = [];
    const list: RawEsoStatus[] = [];

    splitRawDataList.forEach((item: RawEsoStatus): void => {
      if (item && item.slugs && !last.includes(item.slugs[0])) {
        last.push(item.slugs[0]);
        list.push(item);
      }
    });

    return list;
  }

  /**
     * Methode used to get last eso status server with data
     *
     * @public
     * @static
     *
     * @param lastRawData RawEsoStatus[] Raw eso server status list sorted by date
     * @return RawEsoStatus[] Last eso status server with data
     */
  public static getData(lastRawData: RawEsoStatus[]): RawEsoStatus[] {
    return lastRawData.map((item: RawEsoStatus): RawEsoStatus => {
      const newItem: RawEsoStatus = item;
      if (newItem.slugs) {
        newItem.dates = [ServiceAlertsElement.getDate(newItem.rawDate ?? '')];
        newItem.type = ServiceAlertsElement.getType(newItem.slugs[0]);
        newItem.support = ServiceAlertsElement.getSupport(newItem.slugs[0]);
        newItem.zone = ServiceAlertsElement.getZone(newItem.slugs[0]);
        newItem.status = ServiceAlertsElement.getStatus(newItem.rawData ?? '');
      }

      return newItem;
    });
  }
}
