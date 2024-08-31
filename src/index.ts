import { RawEsoStatus } from '@eso-status/types';
import Connector from './connector';

export default class ServiceAlerts {
  public static async fetch(): Promise<RawEsoStatus[]> {
    const remoteContent: string = await Connector.getRemoteContent();
    const connector: Connector = new Connector(remoteContent);
    return connector.rawEsoStatus;
  }
}
