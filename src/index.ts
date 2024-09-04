import { RawEsoStatus } from '@eso-status/types';
import Connector from './connector';

/**
 * Class for retrieving announcement information
 */
export default class ServiceAlerts {
  /**
   * Method for retrieving announcement information
   */
  public static async getData(): Promise<RawEsoStatus[]> {
    return (await Connector.init()).rawEsoStatus;
  }
}
