import { Moment } from 'moment';
import { Support, Slug, Status, Type, Zone } from '@eso-status/types';
/**
 * Class with methode for ServiceAlerts element
 */
export default class ServiceAlertsElement {
    /**
       * Methode used to get slugs list of raw content
       *
       * @public
       * @static
       *
       * @param rawData string Raw data
       * @return Slug[] List of slug
       */
    static getSlug(rawData: string): Slug[];
    /**
       * Methode used to determinate service type
       *
       * @public
       * @static
       *
       * @param type Type Type to check
       * @param rawData string Raw data
       * @return boolean Check result
       */
    static isType(type: Type, rawData: string): boolean;
    /**
       * Methode used to determinate service support
       *
       * @public
       * @static
       *
       * @param support Support Support to check
       * @param rawData string Raw data
       * @return boolean Check result
       */
    static isSupport(support: Support, rawData: string): boolean;
    /**
       * Methode used to determinate service zone
       *
       * @public
       * @static
       *
       * @param zone Zone Zone to check
       * @param rawData string Raw data
       * @return boolean Check result
       */
    static isZone(zone: Zone, rawData: string): boolean;
    /**
       * Methode used to get date of raw content
       *
       * @public
       * @static
       *
       * @param rawDate string Raw data
       * @return Moment Date of raw data
       */
    static getDate(rawDate: string): Moment;
    /**
       * Methode used to get type of slug
       *
       * @public
       * @static
       *
       * @param slug Slug Slug
       * @return Type Type of slug
       */
    static getType(slug: Slug): Type;
    /**
       * Methode used to get support of slug
       *
       * @public
       * @static
       *
       * @param slug Slug Slug
       * @return Support Support of slug
       */
    static getSupport(slug: Slug): Support;
    /**
       * Methode used to get zone of slug
       *
       * @public
       * @static
       *
       * @param slug Slug Slug
       * @return Zone Zone of slug
       */
    static getZone(slug: Slug): Zone;
    /**
       * Methode used to get status of raw data
       *
       * @public
       * @static
       *
       * @param rawData string Raw data
       * @return Status Status of raw data
       */
    static getStatus(rawData: string): Status;
}
