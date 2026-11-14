import moment, { Moment } from 'moment';
import { Support, Slug, Status, Type, Zone } from '@eso-status/types';

const orderedSlugs: Slug[] = [
  'server_pc_na',
  'server_pc_eu',
  'server_xbox_na',
  'server_xbox_eu',
  'server_ps_na',
  'server_ps_eu',
  'server_pc_pts',
  'service_web_site',
  'service_web_forum',
  'service_store_crown',
  'service_store_eso',
  'service_system_account',
];

/**
 * Class with methode for ServiceAlerts element
 */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class -- the published 1.x API exposes static methods, called as is by @eso-status/api 1.x
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
    return orderedSlugs.filter(
      (slug: Slug): boolean =>
        ServiceAlertsElement.isType(
          ServiceAlertsElement.getType(slug),
          rawData,
        ) &&
        ServiceAlertsElement.isSupport(
          ServiceAlertsElement.getSupport(slug),
          rawData,
        ) &&
        ServiceAlertsElement.isZone(
          ServiceAlertsElement.getZone(slug),
          rawData,
        ),
    );
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
      return (
        rawData.includes('megaserver') ||
        rawData.includes('PlayStation™ Network') ||
        rawData.includes('Xbox Live™') ||
        rawData.includes('PTS')
      );
    }
    return (
      rawData.includes('Website') ||
      rawData.includes('Forums') ||
      rawData.includes('Crown Store') ||
      rawData.includes('ESO store') ||
      rawData.includes('ESO Store') ||
      rawData.includes('account system') ||
      rawData.includes('Account System')
    );
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
      return (
        rawData.includes('Xbox') ||
        rawData.includes('European megaservers') ||
        rawData.includes('American megaservers') ||
        rawData.includes('the megaservers')
      );
    }
    if (support === 'ps') {
      return (
        rawData.includes('PlayStation') ||
        rawData.includes('European megaservers') ||
        rawData.includes('American megaservers') ||
        rawData.includes('the megaservers')
      );
    }
    if (support === 'pc') {
      return (
        rawData.includes('PC/Mac') ||
        rawData.includes('PTS') ||
        rawData.includes('European megaservers') ||
        rawData.includes('American megaservers') ||
        rawData.includes('the megaservers')
      );
    }
    if (support === 'web') {
      return rawData.includes('Website') || rawData.includes('Forums');
    }
    if (support === 'store') {
      return (
        rawData.includes('Crown Store') ||
        rawData.includes('ESO store') ||
        rawData.includes('ESO Store')
      );
    }
    return (
      rawData.includes('account system') || rawData.includes('Account System')
    );
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
      return (
        rawData.includes('North American') ||
        rawData.includes('PlayStation™ Network') ||
        rawData.includes('Xbox Live™') ||
        rawData.includes('the megaservers') ||
        rawData.includes('North American and European')
      );
    }
    if (zone === 'eu') {
      return (
        rawData.includes('European') ||
        rawData.includes('PlayStation™ Network') ||
        rawData.includes('Xbox Live™') ||
        rawData.includes('the megaservers') ||
        rawData.includes('North American and European')
      );
    }
    if (zone === 'pts') {
      return rawData.includes('PTS');
    }
    if (zone === 'site') {
      return rawData.includes('Website');
    }
    if (zone === 'forum') {
      return rawData.includes('Forums');
    }
    if (zone === 'crown') {
      return rawData.includes('Crown Store');
    }
    if (zone === 'eso') {
      return rawData.includes('ESO store') || rawData.includes('ESO Store');
    }
    return (
      rawData.includes('account system') || rawData.includes('Account System')
    );
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
    const dateTime: RegExpExecArray | null =
      /(\d{4}).(\d{2}).(\d{2}) - (\d{1,2}):(\d{2})/.exec(rawDate);
    return (
      moment()
        .utc()
        .set(
          'years',
          dateTime && dateTime.length >= 1 ? Number(dateTime[1]) : 0,
        )
        // moment counts months from 0, the raw date from 1
        .set(
          'months',
          dateTime && dateTime.length >= 1 ? Number(dateTime[2]) - 1 : 0,
        )
        .set('date', dateTime && dateTime.length >= 1 ? Number(dateTime[3]) : 0)
        .set(
          'hours',
          dateTime && dateTime.length >= 1 ? Number(dateTime[4]) : 0,
        )
        .set(
          'minutes',
          dateTime && dateTime.length >= 1 ? Number(dateTime[5]) : 0,
        )
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0)
    );
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
    return slug.split('_')[0] as Type;
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
    return slug.split('_')[1] as Support;
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
    return slug.split('_')[2] as Zone;
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
    }
    if (
      rawData.includes('available') ||
      rawData.includes('online') ||
      rawData.includes('resolved')
    ) {
      return 'up';
    }
    if (
      rawData.includes('currently investigating') ||
      rawData.includes('interruption')
    ) {
      return 'issues';
    }

    return 'down';
  }
}
