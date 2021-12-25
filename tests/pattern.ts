import { Moment } from 'moment';
import * as moment from 'moment';
import {
  Support,
  Status,
  Type,
  Zone,
  Slug,
} from '@eso-status/types';

/**
 * Pattern of Service Alerts data
 *
 * @type {rawDate: string, rawData: string, result: {date: Moment, slug: Slug[], status: Status}}[]
 */
export const serviceAlertsPattern: {rawDate: string, rawData: string, result: {date: Moment, slug: Slug[], status: Status}}[] = [
  {
    rawDate: '2021.07.19 - 11:30 UTC (7:30 EDT)',
    rawData: 'We are currently investigating issues some players are having on the European PC/Mac megaserver.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 7)
        .set('date', 19)
        .set('hours', 11)
        .set('minutes', 30)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_pc_eu'],
      status: 'issues',
    },
  },
  {
    rawDate: '2021.07.13 - 12:00 UTC (8:00 EDT)',
    rawData: 'The ESO store and account system are currently unavailable while we perform maintenance.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 7)
        .set('date', 13)
        .set('hours', 12)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['service_store_eso', 'service_system_account'],
      status: 'down',
    },
  },
  {
    rawDate: '2021.07.08 - 19:30 UTC (15:30 EDT)',
    rawData: 'The PTS is currently available.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 7)
        .set('date', 8)
        .set('hours', 19)
        .set('minutes', 30)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_pc_pts'],
      status: 'up',
    },
  },
  {
    rawDate: '2021.07.12 - 12:15 UTC (8:15 EDT)',
    rawData: 'The North American PC/Mac megaserver is currently available.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 7)
        .set('date', 12)
        .set('hours', 12)
        .set('minutes', 15)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_pc_na'],
      status: 'up',
    },
  },
  {
    rawDate: '2021.07.12 - 12:15 UTC (8:15 EDT)',
    rawData: 'The European PC/Mac megaserver is currently available.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 7)
        .set('date', 12)
        .set('hours', 12)
        .set('minutes', 15)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_pc_eu'],
      status: 'up',
    },
  },
  {
    rawDate: '2021.07.12 - 8:00 UTC (4:00 EDT)',
    rawData: 'The North American PC/Mac megaserver is currently unavailable while we perform maintenance.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 7)
        .set('date', 12)
        .set('hours', 8)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_pc_na'],
      status: 'down',
    },
  },
  {
    rawDate: '2021.07.12 - 8:00 UTC (4:00 EDT)',
    rawData: 'The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 7)
        .set('date', 12)
        .set('hours', 8)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_pc_eu'],
      status: 'down',
    },
  },
  {
    rawDate: '2021.07.12 - 6:00 UTC (2:00 EDT)',
    rawData: 'The PTS is currently unavailable while we perform maintenance.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 7)
        .set('date', 12)
        .set('hours', 6)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_pc_pts'],
      status: 'down',
    },
  },
  {
    rawDate: '2021.07.08 - 14:00 UTC (10:00 EDT)',
    rawData: 'The North American Xbox megaserver is currently available.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 7)
        .set('date', 8)
        .set('hours', 14)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_xbox_na'],
      status: 'up',
    },
  },
  {
    rawDate: '2021.07.08 - 14:00 UTC (10:00 EDT)',
    rawData: 'The European Xbox megaserver is currently available.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 7)
        .set('date', 8)
        .set('hours', 14)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_xbox_eu'],
      status: 'up',
    },
  },
  {
    rawDate: '2021.07.08 - 14:00 UTC (10:00 EDT)',
    rawData: 'The North American PlayStation® megaserver is currently available.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 7)
        .set('date', 8)
        .set('hours', 14)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_ps_na'],
      status: 'up',
    },
  },
  {
    rawDate: '2021.07.08 - 14:00 UTC (10:00 EDT)',
    rawData: 'The European PlayStation® megaserver is currently available.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 7)
        .set('date', 8)
        .set('hours', 14)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_ps_eu'],
      status: 'up',
    },
  },
  {
    rawDate: '2021.07.08 - 10:00 UTC (6:00 EDT)',
    rawData: 'The North American Xbox megaserver is currently unavailable while we perform maintenance.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 7)
        .set('date', 8)
        .set('hours', 10)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_xbox_na'],
      status: 'down',
    },
  },
  {
    rawDate: '2021.07.08 - 10:00 UTC (6:00 EDT)',
    rawData: 'The European Xbox megaserver is currently unavailable while we perform maintenance.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 7)
        .set('date', 8)
        .set('hours', 10)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_xbox_eu'],
      status: 'down',
    },
  },
  {
    rawDate: '2021.07.08 - 10:00 UTC (6:00 EDT)',
    rawData: 'The North American PlayStation® megaserver is currently unavailable while we perform maintenance.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 7)
        .set('date', 8)
        .set('hours', 10)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_ps_na'],
      status: 'down',
    },
  },
  {
    rawDate: '2021.07.08 - 10:00 UTC (6:00 EDT)',
    rawData: 'The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 7)
        .set('date', 8)
        .set('hours', 10)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_ps_eu'],
      status: 'down',
    },
  },
  {
    rawDate: '2021.07.01 - 19:05 UTC (15:05 EDT)',
    rawData: 'The issues related to logging in to the North American megaservers have been resolved at this time.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 7)
        .set('date', 1)
        .set('hours', 19)
        .set('minutes', 5)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_pc_na', 'server_xbox_na', 'server_ps_na'],
      status: 'up',
    },
  },
  {
    rawDate: '2021.07.01 - 18:15 UTC (14:15 EDT)',
    rawData: 'We are currently investigating issues some players are having logging into the North American megaservers.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 7)
        .set('date', 1)
        .set('hours', 18)
        .set('minutes', 15)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_pc_na', 'server_xbox_na', 'server_ps_na'],
      status: 'issues',
    },
  },
  {
    rawDate: '2021.06.17 - 14:55 UTC (10:55 EDT)',
    rawData: 'The ESO store and account system are currently available.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 6)
        .set('date', 17)
        .set('hours', 14)
        .set('minutes', 55)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['service_store_eso', 'service_system_account'],
      status: 'up',
    },
  },
  {
    rawDate: '2021.06.11 - 15:55 UTC (11:55 EDT)',
    rawData: 'The issues related to logging in to the European PC/Mac megaserver have been resolved at this time.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 6)
        .set('date', 11)
        .set('hours', 15)
        .set('minutes', 55)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_pc_eu'],
      status: 'up',
    },
  },
  {
    rawDate: '2021.06.11 - 15:30 UTC (11:30 EDT)',
    rawData: 'We are currently investigating issues some players are having logging into the European PC/Mac megaserver.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 6)
        .set('date', 11)
        .set('hours', 15)
        .set('minutes', 30)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_pc_eu'],
      status: 'issues',
    },
  },
  /* {
        rawDate: '2021.05.17 - 16:00 UTC (12:00 EDT)',
        rawData: 'The European PlayStation®4 megaserver is currently available.', // Replace with: The European PlayStation® megaserver is currently available.
        result: {
            date: moment()
        .utc()
                .set('years', 2021).set('months', 5).set('date', 17)
                .set('hours', 16).set('minutes', 0).set('seconds', 0).set('milliseconds', 0)
        .utcOffset(0),
            slug: ['server_ps_eu'],
            status: 'up'
        }
    }, */
  /* {
        rawDate: '2021.05.17 - 16:00 UTC (12:00 EDT)',
        rawData: 'The North American PlayStation®4 megaserver is currently available.', // Replace with The North American PlayStation®4 megaserver is currently available.
        result: {
            date: moment()
        .utc()
                .set('years', 2021).set('months', 5).set('date', 17)
                .set('hours', 16).set('minutes', 0).set('seconds', 0).set('milliseconds', 0)
        .utcOffset(0),
            slug: ['server_ps_na'],
            status: 'up'
        }
    }, */
  /* {
        rawDate: '2021.05.17 - 16:00 UTC (12:00 EDT)',
        rawData: 'The European Xbox One megaserver is currently available.', // Replace with The European Xbox One megaserver is currently available.
        result: {
            date: moment()
        .utc()
                .set('years', 2021).set('months', 5).set('date', 17)
                .set('hours', 16).set('minutes', 0).set('seconds', 0).set('milliseconds', 0)
        .utcOffset(0),
            slug: ['server_xbox_eu'],
            status: 'up'
        }
    }, */
  /* {
        rawDate: '2021.05.17 - 16:00 UTC (12:00 EDT)',
        rawData: 'The North American Xbox One megaserver is currently available.', // Replace with The North American Xbox One megaserver is currently available.
        result: {
            date: moment()
        .utc()
                .set('years', 2021).set('months', 5).set('date', 17)
                .set('hours', 16).set('minutes', 0).set('seconds', 0).set('milliseconds', 0)
        .utcOffset(0),
            slug: ['server_xbox_na'],
            status: 'up'
        }
    }, */
  {
    rawDate: '2021.05.17 - 8:00 UTC (4:00 EDT)',
    rawData: 'The North American megaservers are currently unavailable while we perform maintenance.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 5)
        .set('date', 17)
        .set('hours', 8)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_pc_na', 'server_xbox_na', 'server_ps_na'],
      status: 'down',
    },
  },
  {
    rawDate: '2021.05.17 - 8:00 UTC (4:00 EDT)',
    rawData: 'The European megaservers are currently unavailable while we perform maintenance.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 5)
        .set('date', 17)
        .set('hours', 8)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_pc_eu', 'server_xbox_eu', 'server_ps_eu'],
      status: 'down',
    },
  },
  /* {
        rawDate: '2021.05.10 - 18:15 UTC (14:15 EDT)',
        rawData: 'The North American Xbox One megaserver is currently unavailable while we perform maintenance.', // Replace with The North American Xbox One megaserver is currently unavailable while we perform maintenance.
        result: {
            date: moment()
        .utc()
                .set('years', 2021).set('months', 5).set('date', 10)
                .set('hours', 18).set('minutes', 15).set('seconds', 0).set('milliseconds', 0)
        .utcOffset(0),
            slug: ['server_xbox_na'],
            status: 'down'
        }
    }, */
  /* {
        rawDate: '2021.05.10 - 17:25 UTC (13:25 EDT)',
        rawData: 'We are currently investigating issues some players are having on the North American Xbox One megaserver.',
        result: {
            date: moment()
        .utc()
                .set('years', 2021).set('months', 5).set('date', 10)
                .set('hours', 17).set('minutes', 25).set('seconds', 0).set('milliseconds', 0)
        .utcOffset(0),
            slug: ['server_xbox_na'],
            status: 'issues'
        }
    }, */
  /* {
        rawDate: '2021.05.05 - 8:00 UTC (4:00 EDT)',
        rawData: 'The European Xbox One megaserver is currently unavailable while we perform maintenance.', // Replace with The European Xbox megaserver is currently unavailable while we perform maintenance.
        result: {
            date: moment()
        .utc()
                .set('years', 2021).set('months', 5).set('date', 5)
                .set('hours', 8).set('minutes', 0).set('seconds', 0).set('milliseconds', 0)
        .utcOffset(0),
            slug: ['server_xbox_eu'],
            status: 'down'
        }
    }, */
  /* {
        rawDate: '2021.05.05 - 8:00 UTC (4:00 EDT)',
        rawData: 'The North American PlayStation®4 megaserver is currently unavailable while we perform maintenance.', // Replace with The North American PlayStation® megaserver is currently unavailable while we perform maintenance.
        result: {
            date: moment()
        .utc()
                .set('years', 2021).set('months', 5).set('date', 5)
                .set('hours', 8).set('minutes', 0).set('seconds', 0).set('milliseconds', 0)
        .utcOffset(0),
            slug: ['server_ps_na'],
            status: 'down'
        }
    }, */
  /* {
        rawDate: '2021.05.05 - 8:00 UTC (4:00 EDT)',
        rawData: 'The European PlayStation®4 megaserver is currently unavailable while we perform maintenance.', // Replace with The European PlayStation® megaserver is currently unavailable while we perform maintenance.
        result: {
            date: moment()
        .utc()
                .set('years', 2021).set('months', 5).set('date', 5)
                .set('hours', 8).set('minutes', 0).set('seconds', 0).set('milliseconds', 0)
        .utcOffset(0),
            slug: ['server_ps_eu'],
            status: 'down'
        }
    }, */
  {
    rawDate: '2021.04.28 - 18:00 UTC (14:00 EDT)',
    rawData: 'We are currently investigating issues some players are having on the North American PC/Mac megaserver.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 4)
        .set('date', 28)
        .set('hours', 18)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_pc_na'],
      status: 'issues',
    },
  },
  {
    rawDate: '2021.04.27 - 23:15 UTC (19:15 EDT)',
    rawData: 'The PlayStation™ Network service interruption has been resolved.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 4)
        .set('date', 27)
        .set('hours', 23)
        .set('minutes', 15)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_ps_na', 'server_ps_eu'],
      status: 'up',
    },
  },
  {
    rawDate: '2021.04.27 - 22:00 UTC (18:00 EDT)',
    rawData: 'The PlayStation™ Network is currently experiencing a service interruption.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 4)
        .set('date', 27)
        .set('hours', 22)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_ps_na', 'server_ps_eu'],
      status: 'issues',
    },
  },
  {
    rawDate: '2021.03.31 - 19:30 UTC (15:30 EDT)',
    rawData: 'The issues related to logging in to the megaservers have been resolved at this time.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 3)
        .set('date', 31)
        .set('hours', 19)
        .set('minutes', 30)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_pc_na', 'server_pc_eu', 'server_xbox_na', 'server_xbox_eu', 'server_ps_na', 'server_ps_eu'],
      status: 'up',
    },
  },
  {
    rawDate: '2021.03.31 - 19:30 UTC (15:30 EDT)',
    rawData: 'We are currently investigating issues some players are having logging into the megaservers.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 3)
        .set('date', 31)
        .set('hours', 19)
        .set('minutes', 30)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_pc_na', 'server_pc_eu', 'server_xbox_na', 'server_xbox_eu', 'server_ps_na', 'server_ps_eu'],
      status: 'issues',
    },
  },
  {
    rawDate: '2021.03.15 - 21:15 UTC (17:15 EDT)',
    rawData: 'Xbox Live™ is currently experiencing a service interruption.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 3)
        .set('date', 15)
        .set('hours', 21)
        .set('minutes', 15)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_xbox_na', 'server_xbox_eu'],
      status: 'issues',
    },
  },
  {
    rawDate: '2021.02.26 - 03:00 UTC (2021.02.25 - 22:00 EST)',
    rawData: 'The Xbox Live™ service interruption has been resolved.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 2)
        .set('date', 26)
        .set('hours', 3)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_xbox_na', 'server_xbox_eu'],
      status: 'up',
    },
  },
  {
    rawDate: '2021.02.10 - 13:50 UTC (8:50 EST)',
    rawData: 'The North American megaservers are currently available.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 2)
        .set('date', 10)
        .set('hours', 13)
        .set('minutes', 50)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_pc_na', 'server_xbox_na', 'server_ps_na'],
      status: 'up',
    },
  },
  {
    rawDate: '2021.02.10 - 13:50 UTC (8:50 EST)',
    rawData: 'The European megaservers are currently available.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 2)
        .set('date', 10)
        .set('hours', 13)
        .set('minutes', 50)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_pc_eu', 'server_xbox_eu', 'server_ps_eu'],
      status: 'up',
    },
  },
  /* {
        rawDate: '2021.02.02 - 14:15 UTC (9:15 EST)',
        rawData: 'The issues related to logging in to the European PlayStation®4 megaserver have been resolved at this time.',
        result: {
            date: moment()
        .utc()
                .set('years', 2021).set('months', 2).set('date', 2)
                .set('hours', 14).set('minutes', 15).set('seconds', 0).set('milliseconds', 0)
        .utcOffset(0),
            slug: ['server_ps_eu'],
            status: 'up'
        }
    }, */
  /* {
        rawDate: '2021.02.02 - 13:00 UTC (8:00 EST)',
        rawData: 'We are currently investigating issues some players are having logging into the European PlayStation®4 megaserver.',
        result: {
            date: moment()
        .utc()
                .set('years', 2021).set('months', 2).set('date', 2)
                .set('hours', 13).set('minutes', 0).set('seconds', 0).set('milliseconds', 0)
        .utcOffset(0),
            slug: ['server_ps_eu'],
            status: 'issues'
        }
    }, */
  {
    rawDate: '2021.01.14 - 14:45 UTC (9:45 EST)',
    rawData: 'The ESO Website is currently online.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 1)
        .set('date', 14)
        .set('hours', 14)
        .set('minutes', 45)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['service_web_site'],
      status: 'up',
    },
  },
  {
    rawDate: '2021.01.14 - 12:00 UTC (7:00 EST)',
    rawData: 'The ESO Website is currently unavailable while we perform maintenance.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 1)
        .set('date', 14)
        .set('hours', 12)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['service_web_site'],
      status: 'down',
    },
  },
  /* {
        rawDate: '2021.01.04 - 00:30 UTC (2021.01.03 - 19:30 EST)',
        rawData: 'The connection issues for the North American Xbox One megaserver have been resolved at this time.',
        result: {
            date: moment()
        .utc()
                .set('years', 2021).set('months', 1).set('date', 4)
                .set('hours', 0).set('minutes', 30).set('seconds', 0).set('milliseconds', 0)
        .utcOffset(0),
            slug: ['server_xbox_na'],
            status: 'up'
        }
    }, */
  /* {
        rawDate: '2021.01.03 - 23:00 UTC (18:00 EST)',
        rawData: 'We are currently investigating connection issues some players are having on the North American Xbox One megaserver.',
        result: {
            date: moment()
        .utc()
                .set('years', 2021).set('months', 1).set('date', 3)
                .set('hours', 23).set('minutes', 0).set('seconds', 0).set('milliseconds', 0)
        .utcOffset(0),
            slug: ['server_xbox_na'],
            status: 'issues'
        }
    }, */
  {
    rawDate: '2021.01.03 - 23:00 UTC (18:00 EST)',
    rawData: 'The issues affecting purchases in the ESO store have been resolved.', // TODO replace with true data
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 1)
        .set('date', 3)
        .set('hours', 23)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['service_store_eso'],
      status: 'up',
    },
  },
  {
    rawDate: '2021.01.03 - 23:00 UTC (18:00 EST)',
    rawData: 'The Crown Store is currently available.', // TODO replace with true data
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 1)
        .set('date', 3)
        .set('hours', 23)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['service_store_crown'],
      status: 'up',
    },
  },
  {
    rawDate: '2021.01.03 - 23:00 UTC (18:00 EST)',
    rawData: 'The ESO Forums are currently available.', // TODO replace with true data
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 1)
        .set('date', 3)
        .set('hours', 23)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['service_web_forum'],
      status: 'up',
    },
  },
  {
    rawDate: '2021.01.03 - 23:00 UTC (18:00 EST)',
    rawData: 'We are currently investigating issues some players are having logging into the North American and European PC/Mac megaservers.', // TODO replace with true data
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 1)
        .set('date', 3)
        .set('hours', 23)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_pc_na', 'server_pc_eu'],
      status: 'issues',
    },
  },
  {
    rawDate: '2021.07.22 - 16:00 UTC (12:00 EDT)',
    rawData: 'We are currently investigating issues some players are having logging into the North American and European PlayStation® megaservers.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 7)
        .set('date', 22)
        .set('hours', 16)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_ps_na', 'server_ps_eu'],
      status: 'issues',
    },
  },
  {
    rawDate: '2021.07.22 - 17:30 UTC (13:30 EDT)',
    rawData: 'The issues related to logging in to the North American and European PlayStation® megaservers have been resolved at this time.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 7)
        .set('date', 22)
        .set('hours', 17)
        .set('minutes', 30)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_ps_na', 'server_ps_eu'],
      status: 'up',
    },
  },
  {
    rawDate: '2021.01.03 - 23:00 UTC (18:00 EST)',
    rawData: 'We are currently investigating connection issues some players are having on the North American Xbox megaserver.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021).set('months', 1)
        .set('date', 3)
        .set('hours', 23)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_xbox_na'],
      status: 'issues',
    },
  },
  /* {
        rawDate: '2021.01.03 - 23:00 UTC (18:00 EST)',
        rawData: 'We are currently investigating issues some players are having logging into the European PlayStation® megaserver.',
        result: {
            date: moment()
        .utc()
                .set('years', 2021).set('months', 1).set('date', 3)
                .set('hours', 23).set('minutes', 0).set('seconds', 0).set('milliseconds', 0)
        .utcOffset(0),
            slug: ['server_ps_eu'],
            status: 'issues'
        }
    }, */
  /* {
        rawDate: '2021.01.03 - 23:00 UTC (18:00 EST)',
        rawData: 'The issues related to logging in to the European PlayStation® megaserver have been resolved at this time.',
        result: {
            date: moment()
        .utc()
                .set('years', 2021).set('months', 1).set('date', 3)
                .set('hours', 23).set('minutes', 0).set('seconds', 0).set('milliseconds', 0)
        .utcOffset(0),
            slug: ['server_ps_eu'],
            status: 'up'
        }
    }, */
  {
    rawDate: '2021.01.03 - 23:00 UTC (18:00 EST)',
    rawData: 'The connection issues for the North American Xbox megaserver have been resolved at this time.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021).set('months', 1)
        .set('date', 3)
        .set('hours', 23)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_xbox_na'],
      status: 'up',
    },
  },
  /* {
        rawDate: '2021.01.03 - 23:00 UTC (18:00 EST)',
        rawData: 'We are currently investigating issues some players are having on the North American Xbox megaserver.',
        result: {
            date: moment()
        .utc()
                .set('years', 2021).set('months', 1).set('date', 3)
                .set('hours', 23).set('minutes', 0).set('seconds', 0).set('milliseconds', 0)
        .utcOffset(0),
            slug: ['server_xbox_na'],
            status: 'issues'
        }
    }, */
  {
    rawDate: '2021.10.20 - 00:40 UTC (2021.10.19 - 20:40 EDT)',
    rawData: 'We are currently investigating issues some Steam users are having logging into the North American and European PC/Mac megaservers.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021).set('months', 10)
        .set('date', 20)
        .set('hours', 0)
        .set('minutes', 40)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_pc_na', 'server_pc_eu'],
      status: 'issues',
    },
  },
  {
    rawDate: '2021.10.20 - 03:55 UTC (2021.10.19 - 23:55 EDT)',
    rawData: 'The issues related to Steam players logging in to the North American and European PC/Mac megaservers have been resolved at this time.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021).set('months', 10)
        .set('date', 20)
        .set('hours', 3)
        .set('minutes', 55)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['server_pc_na', 'server_pc_eu'],
      status: 'up',
    },
  },
  {
    rawDate: '2021.12.15 - 19:30 UTC (14:30 EST)',
    rawData: 'We are currently investigating issues with the ESO Store and Account System.',
    result: {
      date: moment()
        .utc()
        .set('years', 2021)
        .set('months', 12)
        .set('date', 15)
        .set('hours', 19)
        .set('minutes', 30)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      slug: ['service_store_eso', 'service_system_account'],
      status: 'issues',
    },
  },
];

/**
 * Pattern of Service Alerts slug
 *
 * @type {slug: Slug, result: {type: Type, support: Support, zone: Zone}}[]
 */
export const slugPattern: {slug: Slug, result: {type: Type, support: Support, zone: Zone}}[] = [
  {
    slug: 'server_xbox_na',
    result: {
      type: 'server',
      support: 'xbox',
      zone: 'na',
    },
  },
  {
    slug: 'server_xbox_eu',
    result: {
      type: 'server',
      support: 'xbox',
      zone: 'eu',
    },
  },
  {
    slug: 'server_ps_na',
    result: {
      type: 'server',
      support: 'ps',
      zone: 'na',
    },
  },
  {
    slug: 'server_ps_eu',
    result: {
      type: 'server',
      support: 'ps',
      zone: 'eu',
    },
  },
  {
    slug: 'server_pc_na',
    result: {
      type: 'server',
      support: 'pc',
      zone: 'na',
    },
  },
  {
    slug: 'server_pc_eu',
    result: {
      type: 'server',
      support: 'pc',
      zone: 'eu',
    },
  },
  {
    slug: 'server_pc_pts',
    result: {
      type: 'server',
      support: 'pc',
      zone: 'pts',
    },
  },
  {
    slug: 'service_web_site',
    result: {
      type: 'service',
      support: 'web',
      zone: 'site',
    },
  },
  {
    slug: 'service_web_forum',
    result: {
      type: 'service',
      support: 'web',
      zone: 'forum',
    },
  },
  {
    slug: 'service_store_crown',
    result: {
      type: 'service',
      support: 'store',
      zone: 'crown',
    },
  },
  {
    slug: 'service_store_eso',
    result: {
      type: 'service',
      support: 'store',
      zone: 'eso',
    },
  },
  {
    slug: 'service_system_account',
    result: {
      type: 'service',
      support: 'system',
      zone: 'account',
    },
  },
];
