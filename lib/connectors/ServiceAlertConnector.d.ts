import { RawEsoStatus } from '@eso-status/types';
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
    static url: string;
    /**
       * Methode used to get raw content of the remote website
       *
       * @public
       * @static
       *
       * @return Promise<string> Raw content of the remote website
       */
    static getRemoteContent(): Promise<string>;
    /**
       * Methode used to select raw content containing eso servers status information
       *
       * @public
       * @static
       *
       * @param remoteContent Raw content of the remote website
       * @return string Raw content containing eso servers status information
       */
    static getFilterContent(remoteContent: string): string;
    /**
       * Methode used to get list of each raw information by date
       *
       * @public
       * @static
       *
       * @param filteredContent string Raw content containing eso servers status information
       * @return string[] List of each information by date
       */
    static changeFilterContentForList(filteredContent: string): string[];
    /**
       * Methode used to get raw data of content list
       *
       * @public
       * @static
       *
       * @param filteredContentList string[] Raw data of content list
       * @return {raw: string, rawDate: string, rawData: string[]}[] Raw data of content list
       */
    static getRawData(filteredContentList: string[]): {
        raw: string;
        rawDate: string;
        rawData: string[];
    }[];
    /**
       * Methode used to get list of split raw data of content list
       *
       * @public
       * @static
       *
       * @param rawData {raw: string, rawDate: string, rawData: string[]}[] Raw data of content list
       * @return RawEsoStatus[] Split raw data of content list
       */
    static splitRawData(rawData: {
        raw: string;
        rawDate: string;
        rawData: string[];
    }[]): RawEsoStatus[];
    /**
       * Methode used to get slug of split raw data of content list
       *
       * @public
       * @static
       *
       * @param splitRawData RawEsoStatus[] Split raw data of content list
       * @return RawEsoStatus[] Split raw data of content list with slug
       */
    static getSlugOfSplitRawData(splitRawData: RawEsoStatus[]): RawEsoStatus[];
    /**
       * Methode used to get split raw data of content list by slug
       *
       * @public
       * @static
       *
       * @param splitRawDataWithSlug RawEsoStatus[] Split raw data of content list with slug
       * @return RawEsoStatus[] Split raw data of content list by slug
       */
    static splitRawDataList(splitRawDataWithSlug: RawEsoStatus[]): RawEsoStatus[];
    /**
       * Methode used to get last element by slug
       *
       * @public
       * @static
       *
       * @param splitRawDataList RawEsoStatus[] Split raw data of content list by slug
       * @return RawEsoStatus[] Raw eso server status list sorted by date
       */
    static getLastRawData(splitRawDataList: RawEsoStatus[]): RawEsoStatus[];
    /**
       * Methode used to get last eso status server with data
       *
       * @public
       * @static
       *
       * @param lastRawData RawEsoStatus[] Raw eso server status list sorted by date
       * @return RawEsoStatus[] Last eso status server with data
       */
    static getData(lastRawData: RawEsoStatus[]): RawEsoStatus[];
}
