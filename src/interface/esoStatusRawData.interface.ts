import { Moment } from 'moment/moment';
import { Slug, Status, Support, Type, Zone } from '@eso-status/types';
import { RemoteRawSlug } from '../type/remoteRawSlug.type';
import { RemoteRawStatus } from '../type/remoteRawStatus.type';
import { SourceUrl } from '../type/sourceUrl.type';

/**
 * Raw data of an ESO server/service status
 */
export interface EsoStatusRawData {
  /**
   * URL of the data source
   */
  source: SourceUrl;
  /**
   * Raw data used to identify the server/service and its status
   */
  raw: string;
  /**
   * Status of the server/service
   */
  status: Status;
  /**
   * Raw data used to identify the status
   */
  rawStatus: RemoteRawStatus;
  /**
   * Slug of the server/service
   */
  slug: Slug;
  /**
   * Raw data used to identify the slug
   */
  rawSlug: RemoteRawSlug;
  /**
   * Type of the server/service
   */
  type: Type;
  /**
   * Support of the server/service
   */
  support: Support;
  /**
   * Zone of the server/service
   */
  zone: Zone;
  /**
   * List of dates contained in the announcement
   */
  dates: Moment[];
  /**
   * Raw data of the date contained in the announcement
   */
  rawDate: string;
}
