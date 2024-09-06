import { Moment } from 'moment';
import * as moment from 'moment';

/**
 * Class for identifying and formatting the date contained in an announcement
 */
export default class DateFormatter {
  /**
   * Raw date data contained in the announcement
   */
  public rawDate: string;

  /**
   * List of dates formatted correctly contained in the announcement
   */
  public dates: Moment[];

  /**
   * @param raw Raw data of the announcement
   */
  constructor(private readonly raw: string) {
    this.rawDate = `${this.raw.split(')')[0]})`;

    const split: string[] = raw.split(' ');
    const dateData: string = split[0];
    const hourData: string = split[2];

    this.dates = [
      moment()
        .utc()
        .set('years', Number(dateData.split('.')[0]))
        .set('months', Number(dateData.split('.')[1]) - 1)
        .set('date', Number(dateData.split('.')[2]))
        .set('hours', Number(hourData.split(':')[0]))
        .set('minutes', Number(hourData.split(':')[1]))
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
    ];
  }
}
