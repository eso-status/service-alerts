import { EsoStatusRawData } from '../../src/interface/esoStatusRawData.interface';
import { SourceUrl } from '../../src/type/sourceUrl.type';

export interface RawItem {
  date: string;
  url: SourceUrl;
  raw: string;
  expected: EsoStatusRawData[];
}
