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
      const split: string[] = this.raw.split('))');
      return `${split[0]})`;
    }
    const split: string[] = this.raw.split(')');
    return `${split[0]})`;
  }

  private getYear(): number {
    const split: string[] = this.rawDate.split('.');
    return Number(split[0]);
  }

  private getMonth(): number {
    const split: string[] = this.rawDate.split('.');
    return Number(split[1]);
  }

  private getDay(): number {
    const split: string[] = this.rawDate.split('.');
    const split1: string[] = split[2].split(' ');
    return Number(split1[0]);
  }

  private getHour(): number {
    const split: string[] = this.rawDate.split(':');
    const split1: string[] = split[0].split(' ');

    return Number(split1[2]);
  }

  private getMinute(): number {
    const split: string[] = this.rawDate.split(' UTC');
    const split1: string[] = split[0].split(':');

    return Number(split1[1]);
  }
}
