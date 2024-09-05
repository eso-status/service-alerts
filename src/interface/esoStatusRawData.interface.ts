import { Moment } from 'moment/moment';
import { Slug, Status, Support, Type, Zone } from '@eso-status/types';
import { RemoteRawSlug } from '../type/remoteRawSlug.type';
import { RemoteRawStatus } from '../type/remoteRawStatus.type';

export interface EsoStatusRawData {
  source: string;
  raw: string;
  status: Status;
  rawStatus?: RemoteRawStatus;
  slug: Slug;
  rawSlug: RemoteRawSlug;
  type: Type;
  support: Support;
  zone: Zone;
  dates?: Moment[];
  rawDate?: string;
}
