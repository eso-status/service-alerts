import StatusIdentifier from './identifier/status.identifier';
import DateFormatter from './formatter/date.formatter';
import SlugIdentifier from './identifier/slug.identifier';
import SlugMatch from './identifier/slug.match';
import ServiceAlertsUrl from './const';
import { EsoStatusRawData } from './interface/esoStatusRawData.interface';
import { MessagePatternType } from './type/messagePattern.type';
import MessageReplacePattern from './pattern/message/messageReplace.pattern';

/**
 * Class containing announcement information
 */
export default class Raw {
  /**
   * Status identification class
   * @private
   */
  private readonly statusIdentifier: StatusIdentifier;

  /**
   * Class for identifying and formatting the date(s)
   * @private
   */
  private readonly dateFormatter: DateFormatter;

  /**
   * Class for identifying the list of slugs
   * @private
   */
  private readonly slugsIdentifier: SlugIdentifier;

  /**
   * Pattern that matched the raw message from the data source
   * @private
   */
  private readonly pattern: MessagePatternType;

  /**
   * List of information about slugs found in the announcement
   */
  public matches: EsoStatusRawData[] = [];

  /**
   * @param raw Raw data of the announcement
   */
  constructor(private readonly raw: string) {
    this.pattern = Raw.getPattern(this.raw);
    this.statusIdentifier = new StatusIdentifier(this.raw);
    this.dateFormatter = new DateFormatter(this.raw);
    this.slugsIdentifier = new SlugIdentifier(this.raw);

    this.split();
  }

  /**
   * Method for formatting each slug found in the announcement to RawEsoStatus
   * @private
   */
  private split(): void {
    this.matches = this.slugsIdentifier.slugMatches.map(
      (slugMatch: SlugMatch): EsoStatusRawData =>
        this.getRawEsoStatus(slugMatch),
    );
  }

  /**
   * Method for generating the RawEsoStatus object
   */
  private getRawEsoStatus(slugMatch: SlugMatch): EsoStatusRawData {
    return {
      source: ServiceAlertsUrl,
      raw: this.raw,
      pattern: this.pattern,
      slug: slugMatch.slug,
      type: slugMatch.getType(),
      support: slugMatch.getSupport(),
      zone: slugMatch.getZone(),
      status: this.statusIdentifier.status,
      rawStatus: this.statusIdentifier.rawStatus,
      rawSlug: slugMatch.rawSlug,
      rawDate: this.dateFormatter.rawDate,
      dates: this.dateFormatter.dates,
    };
  }

  /**
   * Method to get the pattern from raw
   * @param raw Raw data of the announcement
   * @private
   */
  private static getPattern(raw: string): MessagePatternType {
    return MessageReplacePattern.reduce(
      (pattern: string, [search, replacement]: [RegExp, string]): string =>
        pattern.replace(search, replacement),
      raw,
    ) as MessagePatternType;
  }
}
