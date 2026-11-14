import { EsoStatusRawData } from '../../src/interface/esoStatusRawData.interface';
import { SourceUrl } from '../../src/type/sourceUrl.type';
import { MessagePatternType } from '../../src/type/messagePattern.type';

export interface PatternItem {
  date: string;
  url: SourceUrl;
  file: string;
  rawList: string[];
  patternList: MessagePatternType[];
  expected: EsoStatusRawData[];
}
