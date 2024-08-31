import { Moment } from 'moment';
import * as moment from 'moment';

export default class DateFormatter {
  public rawDate: string;

  public dates: Moment[] | undefined;

  constructor(private readonly raw: string) {
    this.rawDate = this.getRawDate();

    this.dates = [
      moment()
        .utc()
        .set('years', this.getYear())
        .set('months', this.getMonth() - 1)
        .set('date', this.getDay())
        .set('hours', this.getHour())
        .set('minutes', this.getMinute())
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

  private getYear(): number {
    return Number(this.rawDate.split('.')[0]);
  }

  private getMonth(): number {
    return Number(this.rawDate.split('.')[1]);
  }

  private getDay(): number {
    return Number(this.rawDate.split('.')[2].split(' ')[0]);
  }

  private getHour(): number {
    return Number(this.rawDate.split(':')[0].split(' ')[2]);
  }

  private getMinute(): number {
    return Number(this.rawDate.split(' UTC')[0].split(':')[1]);
  }
}
