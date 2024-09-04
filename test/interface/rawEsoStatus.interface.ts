import { Moment } from 'moment/moment';
import { Slug, Status, Support, Type, Zone } from '@eso-status/types';
import { RemoteRawStatus } from '../../src/type/remoteRawStatus.type';
import { RemoteRawSlug } from '../../src/type/remoteRawSlug.type';

export interface RawEsoStatus {
  sources: string[];
  raw: string[];
  slugs?: Slug[];
  rawDate?: string;
  rawData?: string;
  dates?: Moment[];
  type?: Type;
  support?: Support;
  zone?: Zone;
  status?: Status;
  rawSlug?: RemoteRawSlug;
  rawStatus?: RemoteRawStatus;
}
