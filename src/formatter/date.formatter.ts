import { Moment } from 'moment';
import * as moment from 'moment';

export default class DateFormatter {
  public rawDate: string;

  public dates: Moment[] | undefined;

  constructor(private readonly raw: string) {
    this.rawDate = this.getRawDate();

    const dateData: string = this.getDateData();
    const hourData: string = this.getHourData();

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

  private getRawDate(): string {
    if (this.raw.includes('))')) {
      return `${this.raw.split('))')[0]})`;
    }
    return `${this.raw.split(')')[0]})`;
  }

  private getDateData(): string {
    return this.rawDate.split(' ')[0];
  }

  private getHourData(): string {
    return this.rawDate.split(' ')[2];
  }
}
