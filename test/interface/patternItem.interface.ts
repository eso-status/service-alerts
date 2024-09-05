import { EsoStatusRawData } from '../../src/interface/esoStatusRawData.interface';

export interface PatternItem {
  date: string;
  url: string;
  file: string;
  expected: EsoStatusRawData[];
}
