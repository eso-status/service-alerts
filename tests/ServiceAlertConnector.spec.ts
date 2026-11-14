import { RawEsoStatus } from '@eso-status/types';
import ServiceAlertConnector from '../src/connectors/ServiceAlertConnector';

describe('ServiceAlertConnector', (): void => {
  let remoteContent: string;
  let filteredContent: string;
  let filteredContentList: string[];
  let rawData: { raw: string; rawDate: string; rawData: string[] }[];
  let splitRawData: RawEsoStatus[];
  let splitRawDataWithSlug: RawEsoStatus[];
  let splitRawDataList: RawEsoStatus[];
  let lastRawData: RawEsoStatus[];
  let data: RawEsoStatus[];

  beforeAll(async (): Promise<void> => {
    remoteContent = await ServiceAlertConnector.getRemoteContent();
    filteredContent = ServiceAlertConnector.getFilterContent(remoteContent);
    filteredContentList =
      ServiceAlertConnector.changeFilterContentForList(filteredContent);
    rawData = ServiceAlertConnector.getRawData(filteredContentList);
    splitRawData = ServiceAlertConnector.splitRawData(rawData);
    splitRawDataWithSlug =
      ServiceAlertConnector.getSlugOfSplitRawData(splitRawData);
    splitRawDataList =
      ServiceAlertConnector.splitRawDataList(splitRawDataWithSlug);
    lastRawData = ServiceAlertConnector.getLastRawData(splitRawDataList);
    data = ServiceAlertConnector.getData(lastRawData);
  });

  it('getRemoteContent', (): void => {
    expect(remoteContent).toContain(
      '<!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->',
    );
    expect(remoteContent).toContain('<p>&nbsp;</p>');
  });

  it('getFilterContent', (): void => {
    expect(filteredContent).not.toBe('');
    expect(filteredContent).toContain('<hr />');
  });

  it('changeFilterContentForList', (): void => {
    expect(filteredContentList).not.toHaveLength(0);

    filteredContentList.forEach((item: string): void => {
      expect(item).toContain('</p>');
    });
  });

  it('getRawData', (): void => {
    expect(rawData).not.toHaveLength(0);

    rawData.forEach(
      (item: { raw: string; rawDate: string; rawData: string[] }): void => {
        expect(item.raw).not.toBe('');
        expect(item.rawDate).toContain('UTC');
        expect(item.rawData.length).toBeGreaterThan(0);
      },
    );
  });

  it('splitRawData', (): void => {
    expect(splitRawData).not.toHaveLength(0);
  });

  it('getSlugOfSplitRawData', (): void => {
    expect(splitRawDataWithSlug).not.toHaveLength(0);
    splitRawDataWithSlug.forEach((item: RawEsoStatus): void => {
      expect(item.slugs).not.toHaveLength(0);
    });
  });

  it('splitRawDataList', (): void => {
    expect(splitRawDataList).not.toHaveLength(0);
    splitRawDataList.forEach((item: RawEsoStatus): void => {
      expect(item.slugs).not.toHaveLength(0);
    });
  });

  it('getLastRawData', (): void => {
    expect(lastRawData).not.toHaveLength(0);
  });

  it('getData', (): void => {
    expect(data).not.toHaveLength(0);
  });
});

test('getRawData removes every line break', (): void => {
  const rawData: { raw: string; rawDate: string; rawData: string[] }[] =
    ServiceAlertConnector.getRawData([
      '\n\n\n<p>2026.11.12 - 12:15 UTC (7:15 ET)</p>\n\n\n<p>The PTS is currently available.</p>',
    ]);

  expect(rawData[0].rawDate).toBe('2026.11.12 - 12:15 UTC (7:15 ET)');
  expect(rawData[0].rawData).toStrictEqual(['The PTS is currently available.']);
});
