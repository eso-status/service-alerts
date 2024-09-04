import { RawEsoStatus } from '@eso-status/types';

export interface PatternItem {
  date: string;
  url: string;
  file: string;
  expected: RawEsoStatus[];
}
