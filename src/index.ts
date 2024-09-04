import { RawEsoStatus } from '@eso-status/types';
import Connector from './connector';

export default class ServiceAlerts {
  public static async getData(): Promise<RawEsoStatus[]> {
    const connector: Connector = new Connector(
      await Connector.getRemoteContent(),
    );

    return connector.rawEsoStatus;
  }
}
