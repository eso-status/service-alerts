import { RawEsoStatus, Slug } from '@eso-status/types';
import ServiceAlertConnector from '../src/connectors/ServiceAlertConnector';

describe('ServiceAlertConnector', (): void => {
  let remoteContent: string;
  let filteredContent: string;
  let filteredContentList: string[];
  let rawData: {raw: string, rawDate: string, rawData: string[]}[];
  let splitRawData: RawEsoStatus[];
  let splitRawDataWithSlug: RawEsoStatus[];
  let splitRawDataList: RawEsoStatus[];
  let lastRawData: RawEsoStatus[];
  let data: RawEsoStatus[];

  beforeAll(async (): Promise<void> => {
    remoteContent = await ServiceAlertConnector.getRemoteContent();
    filteredContent = ServiceAlertConnector.getFilterContent(remoteContent);
    filteredContentList = ServiceAlertConnector.changeFilterContentForList(filteredContent);
    rawData = ServiceAlertConnector.getRawData(filteredContentList);
    splitRawData = ServiceAlertConnector.splitRawData(rawData);
    splitRawDataWithSlug = ServiceAlertConnector.getSlugOfSplitRawData(splitRawData);
    splitRawDataList = ServiceAlertConnector.splitRawDataList(splitRawDataWithSlug);
    lastRawData = ServiceAlertConnector.getLastRawData(splitRawDataList);
    data = ServiceAlertConnector.getData(lastRawData);
  });

  it('getRemoteContent', (): void => {
    expect(remoteContent.includes('<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->')).toEqual(true);
    expect(remoteContent.includes('<p>&nbsp;</p>')).toEqual(true);
  });

  it('getFilterContent', (): void => {
    expect(filteredContent !== '').toEqual(true);
    expect(filteredContent.includes('<hr />')).toEqual(true);
  });

  it('changeFilterContentForList', (): void => {
    expect(filteredContentList.length !== 0).toEqual(true);

    filteredContentList.forEach((item: string): void => {
      expect(item.includes('</p>')).toEqual(true);
    });
  });

  it('getRawData', (): void => {
    expect(rawData.length !== 0).toEqual(true);

    rawData.forEach((item: {raw: string, rawDate: string, rawData: string[]}): void => {
      expect(item.raw !== '').toEqual(true);
      expect(item.rawDate.includes('UTC')).toEqual(true);
      expect(item.rawData.length > 0).toEqual(true);
    });
  });

  it('splitRawData', (): void => {
    expect(splitRawData.length !== 0).toEqual(true);
  });

  it('getSlugOfSplitRawData', (): void => {
    expect(splitRawDataWithSlug.length !== 0).toEqual(true);
    splitRawDataWithSlug.forEach((item: RawEsoStatus): void => {
      expect((<Slug[]>item.slugs).length !== 0).toEqual(true);
    });
  });

  it('splitRawDataList', (): void => {
    expect(splitRawDataList.length !== 0).toEqual(true);
    splitRawDataList.forEach((item: RawEsoStatus): void => {
      expect((<Slug[]>item.slugs).length !== 0).toEqual(true);
    });
  });

  it('getLastRawData', (): void => {
    expect(lastRawData.length !== 0).toEqual(true);
  });

  it('getData', (): void => {
    expect(data.length !== 0).toEqual(true);
  });
});
