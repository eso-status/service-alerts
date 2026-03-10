import { EsoStatusRawData } from '@eso-status/types';
import Connector from './connector';

/**
 * Class for retrieving announcement information
 */
/* eslint-disable @typescript-eslint/no-extraneous-class */
export default class ServiceAlerts {
  /**
   * Method for retrieving announcement information
   */
  public static async getData(): Promise<EsoStatusRawData[]> {
    return (await Connector.init()).rawEsoStatus;
  }
}
/* eslint-enable @typescript-eslint/no-extraneous-class */
