import { RawEsoStatus } from '@eso-status/types';

export interface PatternItem {
  url: string;
  file: string;
  expected: RawEsoStatus[];
}
