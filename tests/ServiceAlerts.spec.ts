import { RawEsoStatus } from '@eso-status/types';
import { ServiceAlerts } from '../src';

test('getData()', async (): Promise<void> => {
  const data: RawEsoStatus[] = await ServiceAlerts.getData();

  expect(data.length !== 0).toEqual(true);
});
