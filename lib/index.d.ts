import { RawEsoStatus } from '@eso-status/types';
/**
 * Class of Service Alerts
 */
export declare class ServiceAlerts {
    /**
       * Methode used to get Service Alerts data
       *
       * @public
       * @static
       *
       * @return Promise<RawEsoStatus[]> Service Alerts elements
       */
    static getData(): Promise<RawEsoStatus[]>;
}
