import * as fs from 'node:fs';
import axios from 'axios';
import * as moment from 'moment';
import Connector from '../src/connector';
import Raw from '../src/raw';
import pattern from './data/pattern';
import { PatternItem } from './interface/patternItem.interface';
import ServiceAlerts from '../src';
import raw from './data/raw';
import { RawItem } from './interface/rawItem.interface';

describe('ForumMessage (e2e)', (): void => {
  it.each(pattern)(
    'should pattern works with ($file)',
    async (patternData: PatternItem): Promise<void> => {
      jest
        .spyOn(axios, 'get')
        .mockImplementation(
          async (): Promise<{ status: number; data: string }> => {
            const data: string = await fs.promises.readFile(
              `${__dirname}/data/${patternData.file}`,
              'utf8',
            );
            return Promise.resolve({
              status: 200,
              data,
            });
          },
        );

      jest
        .useFakeTimers()
        .setSystemTime(
          new Date(
            moment(patternData.date, 'YYYY-MM-DD')
              .utcOffset(0)
              .set('years', moment(patternData.date, 'YYYY-MM-DD').get('years'))
              .set(
                'months',
                moment(patternData.date, 'YYYY-MM-DD').get('months'),
              )
              .set('days', moment(patternData.date, 'YYYY-MM-DD').get('days'))
              .set('hour', 0)
              .set('hours', 0)
              .set('minutes', 0)
              .set('seconds', 0)
              .set('milliseconds', 0)
              .toISOString(),
          ),
        );

      expect(await ServiceAlerts.getData()).toStrictEqual(patternData.expected);
    },
  );

  it.each(pattern)(
    'should pattern return raw list with ($file)',
    async (patternData: PatternItem): Promise<void> => {
      jest
        .spyOn(axios, 'get')
        .mockImplementation(
          async (): Promise<{ status: number; data: string }> => {
            const data: string = await fs.promises.readFile(
              `${__dirname}/data/${patternData.file}`,
              'utf8',
            );
            return Promise.resolve({
              status: 200,
              data,
            });
          },
        );

      expect((await Connector.init()).raw).toStrictEqual(patternData.rawList);
    },
  );

  it.each(raw)(
    'should raw return correct EsoStatusRawData with ($raw)',
    (rawItem: RawItem): void => {
      const rawClass: Raw = new Raw(rawItem.raw);

      expect(rawClass.matches).toStrictEqual(rawItem.expected);
    },
  );

  it('should return empty array when forum return error or nothing', async (): Promise<void> => {
    jest
      .spyOn(axios, 'get')
      .mockImplementation(
        async (): Promise<{ status: number; data: string }> => {
          return Promise.resolve({
            status: 500,
            data: '',
          });
        },
      );

    expect(await ServiceAlerts.getData()).toEqual([]);
  });
});
