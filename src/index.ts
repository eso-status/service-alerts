import { RawEsoStatus } from '@eso-status/types';
import ServiceAlertConnector from './connectors/ServiceAlertConnector';

/**
 * Class of Service Alerts
 */
export class ServiceAlerts {
  /**
     * Methode used to get Service Alerts data
     *
     * @public
     * @static
     *
     * @return Promise<RawEsoStatus[]> Service Alerts elements
     */
  public static async getData(): Promise<RawEsoStatus[]> {
    const remoteContent: string = await ServiceAlertConnector.getRemoteContent();
    const filteredContent: string = ServiceAlertConnector.getFilterContent(remoteContent);
    const filteredContentList: string[] = ServiceAlertConnector.changeFilterContentForList(filteredContent);
    const rawData: {raw: string, rawDate: string, rawData: string[]}[] = ServiceAlertConnector.getRawData(filteredContentList);
    const splitRawData: RawEsoStatus[] = ServiceAlertConnector.splitRawData(rawData);
    const splitRawDataWithSlug: RawEsoStatus[] = ServiceAlertConnector.getSlugOfSplitRawData(splitRawData);
    const splitRawDataList: RawEsoStatus[] = ServiceAlertConnector.splitRawDataList(splitRawDataWithSlug);
    const lastRawData: RawEsoStatus[] = ServiceAlertConnector.getLastRawData(splitRawDataList);
    return ServiceAlertConnector.getData(lastRawData);
  }
}
