import { Moment } from 'moment';
import * as moment from 'moment';
import {
  Support,
  Slug,
  Status,
  Type,
  Zone,
} from '@eso-status/types';

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
  public static getSlug(rawData: string): Slug[] {
    const slugs: Slug[] = [];

    if (
      ServiceAlertsElement.isType('server', rawData)
            && ServiceAlertsElement.isSupport('pc', rawData)
            && ServiceAlertsElement.isZone('na', rawData)
    ) {
      slugs.push('server_pc_na');
    }

    if (
      ServiceAlertsElement.isType('server', rawData)
            && ServiceAlertsElement.isSupport('pc', rawData)
            && ServiceAlertsElement.isZone('eu', rawData)
    ) {
      slugs.push('server_pc_eu');
    }

    if (
      ServiceAlertsElement.isType('server', rawData)
            && ServiceAlertsElement.isSupport('xbox', rawData)
            && ServiceAlertsElement.isZone('na', rawData)
    ) {
      slugs.push('server_xbox_na');
    }

    if (
      ServiceAlertsElement.isType('server', rawData)
            && ServiceAlertsElement.isSupport('xbox', rawData)
            && ServiceAlertsElement.isZone('eu', rawData)
    ) {
      slugs.push('server_xbox_eu');
    }

    if (
      ServiceAlertsElement.isType('server', rawData)
            && ServiceAlertsElement.isSupport('ps', rawData)
            && ServiceAlertsElement.isZone('na', rawData)
    ) {
      slugs.push('server_ps_na');
    }

    if (
      ServiceAlertsElement.isType('server', rawData)
            && ServiceAlertsElement.isSupport('ps', rawData)
            && ServiceAlertsElement.isZone('eu', rawData)
    ) {
      slugs.push('server_ps_eu');
    }

    if (
      ServiceAlertsElement.isType('server', rawData)
            && ServiceAlertsElement.isSupport('pc', rawData)
            && ServiceAlertsElement.isZone('pts', rawData)
    ) {
      slugs.push('server_pc_pts');
    }

    if (
      ServiceAlertsElement.isType('service', rawData)
            && ServiceAlertsElement.isSupport('web', rawData)
            && ServiceAlertsElement.isZone('site', rawData)
    ) {
      slugs.push('service_web_site');
    }

    if (
      ServiceAlertsElement.isType('service', rawData)
            && ServiceAlertsElement.isSupport('web', rawData)
            && ServiceAlertsElement.isZone('forum', rawData)
    ) {
      slugs.push('service_web_forum');
    }

    if (
      ServiceAlertsElement.isType('service', rawData)
            && ServiceAlertsElement.isSupport('store', rawData)
            && ServiceAlertsElement.isZone('crown', rawData)
    ) {
      slugs.push('service_store_crown');
    }

    if (
      ServiceAlertsElement.isType('service', rawData)
            && ServiceAlertsElement.isSupport('store', rawData)
            && ServiceAlertsElement.isZone('eso', rawData)
    ) {
      slugs.push('service_store_eso');
    }

    if (
      ServiceAlertsElement.isType('service', rawData)
            && ServiceAlertsElement.isSupport('system', rawData)
            && ServiceAlertsElement.isZone('account', rawData)
    ) {
      slugs.push('service_system_account');
    }

    return slugs;
  }

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
  public static isType(type: Type, rawData: string): boolean {
    if (type === 'server') {
      return rawData.includes('megaserver')
                || rawData.includes('PlayStation™ Network')
                || rawData.includes('Xbox Live™')
                || rawData.includes('PTS');
    } if (type === 'service') {
      return rawData.includes('Website')
                || rawData.includes('Forums')
                || rawData.includes('Crown Store')
                || rawData.includes('ESO store')
                || rawData.includes('ESO Store')
                || rawData.includes('account system')
                || rawData.includes('Account System');
    }

    return false;
  }

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
  public static isSupport(support: Support, rawData: string): boolean {
    if (support === 'xbox') {
      return rawData.includes('Xbox')
                || rawData.includes('European megaservers')
                || rawData.includes('American megaservers')
                || rawData.includes('the megaservers');
    } if (support === 'ps') {
      return rawData.includes('PlayStation')
                || rawData.includes('European megaservers')
                || rawData.includes('American megaservers')
                || rawData.includes('the megaservers');
    } if (support === 'pc') {
      return rawData.includes('PC/Mac')
                || rawData.includes('PTS')
                || rawData.includes('European megaservers')
                || rawData.includes('American megaservers')
                || rawData.includes('the megaservers');
    } if (support === 'web') {
      return rawData.includes('Website')
                || rawData.includes('Forums');
    } if (support === 'store') {
      return rawData.includes('Crown Store')
                || rawData.includes('ESO store')
                || rawData.includes('ESO Store');
    } if (support === 'system') {
      return rawData.includes('account system')
                || rawData.includes('Account System');
    }

    return false;
  }

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
  public static isZone(zone: Zone, rawData: string): boolean {
    if (zone === 'na') {
      return rawData.includes('North American')
                || rawData.includes('PlayStation™ Network')
                || rawData.includes('Xbox Live™')
                || rawData.includes('the megaservers')
                || rawData.includes('North American and European');
    } if (zone === 'eu') {
      return rawData.includes('European')
                || rawData.includes('PlayStation™ Network')
                || rawData.includes('Xbox Live™')
                || rawData.includes('the megaservers')
                || rawData.includes('North American and European');
    } if (zone === 'pts') {
      return rawData.includes('PTS');
    } if (zone === 'site') {
      return rawData.includes('Website');
    } if (zone === 'forum') {
      return rawData.includes('Forums');
    } if (zone === 'crown') {
      return rawData.includes('Crown Store');
    } if (zone === 'eso') {
      return rawData.includes('ESO store')
                || rawData.includes('ESO Store');
    } if (zone === 'account') {
      return rawData.includes('account system')
                || rawData.includes('Account System');
    }

    return false;
  }

  /**
     * Methode used to get date of raw content
     *
     * @public
     * @static
     *
     * @param rawDate string Raw data
     * @return Moment Date of raw data
     */
  public static getDate(rawDate: string): Moment {
    const dateTime: RegExpExecArray | null = /([0-9]{4}).([0-9]{2}).([0-9]{2}) - ([0-9]{1,2}):([0-9]{2})/.exec(rawDate);
    return moment()
      .utc()
      .set('years', Number(dateTime && dateTime.length >= 1 ? Number(dateTime[1]) : 0))
      .set('months', Number(dateTime && dateTime.length >= 1 ? Number(dateTime[2]) : 0))
      .set('date', Number(dateTime && dateTime.length >= 1 ? Number(dateTime[3]) : 0))
      .set('hours', Number(dateTime && dateTime.length >= 1 ? Number(dateTime[4]) : 0))
      .set('minutes', Number(dateTime && dateTime.length >= 1 ? Number(dateTime[5]) : 0))
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0);
  }

  /**
     * Methode used to get type of slug
     *
     * @public
     * @static
     *
     * @param slug Slug Slug
     * @return Type Type of slug
     */
  public static getType(slug: Slug): Type {
    return <Type>slug.split('_')[0];
  }

  /**
     * Methode used to get support of slug
     *
     * @public
     * @static
     *
     * @param slug Slug Slug
     * @return Support Support of slug
     */
  public static getSupport(slug: Slug): Support {
    return <Support>slug.split('_')[1];
  }

  /**
     * Methode used to get zone of slug
     *
     * @public
     * @static
     *
     * @param slug Slug Slug
     * @return Zone Zone of slug
     */
  public static getZone(slug: Slug): Zone {
    return <Zone>slug.split('_')[2];
  }

  /**
     * Methode used to get status of raw data
     *
     * @public
     * @static
     *
     * @param rawData string Raw data
     * @return Status Status of raw data
     */
  public static getStatus(rawData: string): Status {
    if (rawData.includes('unavailable')) {
      return 'down';
    } if (rawData.includes('available') || rawData.includes('online') || rawData.includes('resolved')) {
      return 'up';
    } if (rawData.includes('currently investigating') || rawData.includes('interruption')) {
      return 'issues';
    }

    return 'down';
  }
}
