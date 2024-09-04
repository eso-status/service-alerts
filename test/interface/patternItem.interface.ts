import { RawEsoStatus } from './rawEsoStatus.interface';

export interface PatternItem {
  date: string;
  url: string;
  file: string;
  expected: RawEsoStatus[];
}
