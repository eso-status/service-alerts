import { RawEsoStatus } from '@eso-status/types';
import { ServiceAlerts } from '../src';

test('getData()', async (): Promise<void> => {
  const data: RawEsoStatus[] = await ServiceAlerts.getData();

  expect(data).not.toHaveLength(0);
});
