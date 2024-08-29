import { RawEsoStatus } from '@eso-status/types';
import Connector from './connector';

export default class ServiceAlerts {
  public static async getData(): Promise<RawEsoStatus[]> {
    return (await Connector.init()).rawEsoStatus;
  }
}
