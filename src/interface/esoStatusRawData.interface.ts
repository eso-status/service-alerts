import { Moment } from 'moment/moment';
import { Slug, Status, Support, Type, Zone } from '@eso-status/types';
import { RemoteRawSlug } from '../type/remoteRawSlug.type';
import { RemoteRawStatus } from '../type/remoteRawStatus.type';
import { SourceUrl } from '../type/sourceUrl.type';

/**
 * Donnée brute du status d'un server/service ESO
 */
export interface EsoStatusRawData {
  /**
   * URL de la source de la donnée
   */
  source: SourceUrl;
  /**
   * Donnée brute permettant d'identifier le server/service et son status
   */
  raw: string;
  /**
   * Status du server/service
   */
  status: Status;
  /**
   * Donnée brute ayant permis d'identifier le status
   */
  rawStatus: RemoteRawStatus;
  /**
   * Slug du server/service
   */
  slug: Slug;
  /**
   * Donnée brute ayant permis d'identifier le slug
   */
  rawSlug: RemoteRawSlug;
  /**
   * Type du server/service
   */
  type: Type;
  /**
   * Support du server/service
   */
  support: Support;
  /**
   * Zone du server/service
   */
  zone: Zone;
  /**
   * Liste des dates contenue dans l'annonce
   */
  dates: Moment[];
  /**
   * Donnée brute de la date contenue dans l'annonce
   */
  rawDate: string;
}
