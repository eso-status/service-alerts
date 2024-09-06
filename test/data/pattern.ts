import * as moment from 'moment/moment';
import { PatternItem } from '../interface/patternItem.interface';
import ServiceAlertsUrl from '../../src/const';

const pattern: PatternItem[] = [
  {
    url: ServiceAlertsUrl,
    date: '2024-08-13T12_16_34',
    file: '2024-08-13T12_16_34.html',
    rawList: [
      '2024.08.08 - 15:30 UTC (11:30 EDT) The issues related to logging in to the North American and European Xbox megaservers have been resolved at this time.',
      '2024.08.08 - 14:50 UTC (10:50 EDT) We are currently investigating issues some players are having logging into the North American and European Xbox megaservers.',
      '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
      '2024.08.07 - 8:00 UTC (4:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The PTS is currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
      '2024.08.05 - 18:00 UTC (14:00 EDT) The PTS is currently available.',
      '2024.08.05 - 14:00 UTC (10:00 EDT)) The PTS is currently unavailable while we perform maintenance.',
      '2024.07.29 - 18:00 UTC (14:00 EDT) The PTS is currently available.',
      '2024.07.29 - 14:00 UTC (10:00 EDT)) The PTS is currently unavailable while we perform maintenance.',
      '2024.07.24 - 15:35 UTC (11:35 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
      '2024.07.24 - 10:00 UTC (6:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
      '2024.07.22 - 17:40 UTC (13:40 EDT) The PTS is currently available.',
      '2024.07.22 - 12:10 UTC (8:10 EDT) The North American PC/Mac megaserver is currently available. The European PC/Mac megaserver is currently available.',
      '2024.07.22 - 12:00 UTC (8:00 EDT)) The PTS is currently unavailable while we perform maintenance.',
      '2024.07.22 - 8:00 UTC (4:00 EDT) The North American PC/Mac megaserver is currently unavailable while we perform maintenance. The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
      '2024.07.19 - 4:20 UTC (12:20 EDT) The Xbox Live™ service interruption has been resolved.',
      '2024.07.19 - 0:00 UTC (07.18.24 - 20:00 EDT) Xbox Live™ is currently experiencing a service interruption.',
      '2024.07.15 - 21:00 UTC (17:00 EDT) The PTS is currently available.',
      '2024.07.15 - 14:00 UTC (10:00 EDT)) The PTS is currently unavailable while we perform maintenance.',
      '2024.07.10 - 16:00 UTC (12:00 EDT) The issues related to logging in to the North American PlayStation® megaserver have been resolved at this time.',
      '2024.07.10 - 15:00 UTC (11:00 EDT) We are currently investigating issues some players are having logging into the North American PlayStation® megaserver.',
      '2024.07.10 - 14:15 UTC (10:15 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
      '2024.07.10 - 08:00 UTC (04:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
      '2024.07.09 - 12:15 UTC (08:15 EDT) The North American PC/Mac megaserver is currently available. The European PC/Mac megaserver is currently available.',
      '2024.07.09 - 8:00 UTC (04:00 EDT) The North American PC/Mac megaserver is currently unavailable while we perform maintenance. The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
      '2024.07.08 - 20:00 UTC (16:00 EDT) The PTS is currently available.',
      '2024.07.08 - 12:00 UTC (8:00 EDT)) The PTS is currently unavailable while we perform maintenance.',
      '2024.07.03 - 01:20 UTC (2024.07.02 - 21:20 EDT) The Xbox Live™ service interruption has been resolved.',
      '2024.07.02 - 18:30 UTC (14:00 EDT) Xbox Live™ is currently experiencing a service interruption.',
      '2024.07.01 - 14:30 UTC (10:30 EDT) The European megaservers are currently available.',
      '2024.07.01 - 12:00 UTC (08:00 EDT) The North American megaservers are currently available. The ESO store and account system are currently available.',
      '2024.07.01 - 8:00 UTC (04:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
      '2024.06.18 - 9:00 UTC (5:00 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
      '2024.06.18 - 2:00 UTC (2024.06.17 - 22:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
      '2024.06.17 - 11:25 UTC (7:25 EDT) The North American PC/Mac megaserver is currently available. The European PC/Mac megaserver is currently available.',
      '2024.06.17 - 8:00 UTC (04:00 EDT) The North American PC/Mac megaserver is currently unavailable while we perform maintenance. The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
      '2024.06.11 - 14:50 UTC (10:50 EDT) The PTS is currently available.',
      '2024.06.11 - 14:00 UTC (10:00 EDT)) The PTS is currently unavailable while we perform maintenance.',
      '2024.06.05 - 14:30 UTC (10:30 EDT) The ESO store and account system are currently available.',
      '2024.06.05 - 12:15 UTC (8:15 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
      '2024.06.05 - 12:00 UTC (8:00 EDT) The ESO store and account system are currently unavailable while we perform maintenance.',
      '2024.06.05 - 10:00 UTC (06:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
      '2024.06.03 - 12:00 UTC (08:00 EDT) The North American PC/Mac megaserver is currently available. The European PC/Mac megaserver is currently available.',
      '2024.06.03 - 6:00 UTC (02:00 EDT) The North American PC/Mac megaserver is currently unavailable while we perform maintenance. The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
    ],
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.08 - 15:30 UTC (11:30 EDT) The issues related to logging in to the North American and European Xbox megaservers have been resolved at this time.',
        slug: 'server_xbox_eu',
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        status: 'up',
        rawSlug: 'North American and European Xbox megaservers',
        rawDate: '2024.08.08 - 15:30 UTC (11:30 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 8)
            .set('hours', 15)
            .set('minutes', 30)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'been resolved',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.08 - 15:30 UTC (11:30 EDT) The issues related to logging in to the North American and European Xbox megaservers have been resolved at this time.',
        slug: 'server_xbox_na',
        type: 'server',
        support: 'xbox',
        zone: 'na',
        status: 'up',
        rawSlug: 'North American and European Xbox megaservers',
        rawDate: '2024.08.08 - 15:30 UTC (11:30 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 8)
            .set('hours', 15)
            .set('minutes', 30)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'been resolved',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        slug: 'server_pc_eu',
        type: 'server',
        support: 'pc',
        zone: 'eu',
        status: 'up',
        rawSlug: 'The European megaservers',
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 15)
            .set('minutes', 45)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        slug: 'server_ps_eu',
        type: 'server',
        support: 'ps',
        zone: 'eu',
        status: 'up',
        rawSlug: 'The European megaservers',
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 15)
            .set('minutes', 45)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        slug: 'server_pc_na',
        type: 'server',
        support: 'pc',
        zone: 'na',
        status: 'up',
        rawSlug: 'The North American megaservers',
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 15)
            .set('minutes', 45)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        slug: 'server_ps_na',
        type: 'server',
        support: 'ps',
        zone: 'na',
        status: 'up',
        rawSlug: 'The North American megaservers',
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 15)
            .set('minutes', 45)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        slug: 'server_pc_pts',
        type: 'server',
        support: 'pc',
        zone: 'pts',
        status: 'up',
        rawSlug: 'PTS',
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 15)
            .set('minutes', 45)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        slug: 'service_store_eso',
        type: 'service',
        support: 'store',
        zone: 'eso',
        status: 'up',
        rawSlug: 'ESO store',
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 15)
            .set('minutes', 45)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        slug: 'service_system_account',
        type: 'service',
        support: 'system',
        zone: 'account',
        status: 'up',
        rawSlug: 'account system',
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 15)
            .set('minutes', 45)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
    ],
  },
  {
    url: ServiceAlertsUrl,
    date: '2024-08-19T16_12_04',
    file: '2024-08-19T16_12_04.html',
    rawList: [
      '2024.08.19 - 16:00 UTC (12:00 EDT) The European PC/Mac megaserver is currently available.',
      '2024.08.19 - 8:00 UTC (4:00 EDT) The North American PC/Mac megaserver is currently unavailable while we perform maintenance. The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
      '2024.08.08 - 15:30 UTC (11:30 EDT) The issues related to logging in to the North American and European Xbox megaservers have been resolved at this time.',
      '2024.08.08 - 14:50 UTC (10:50 EDT) We are currently investigating issues some players are having logging into the North American and European Xbox megaservers.',
      '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
      '2024.08.07 - 8:00 UTC (4:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The PTS is currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
      '2024.08.05 - 18:00 UTC (14:00 EDT) The PTS is currently available.',
      '2024.08.05 - 14:00 UTC (10:00 EDT)) The PTS is currently unavailable while we perform maintenance.',
      '2024.07.29 - 18:00 UTC (14:00 EDT) The PTS is currently available.',
      '2024.07.29 - 14:00 UTC (10:00 EDT)) The PTS is currently unavailable while we perform maintenance.',
      '2024.07.24 - 15:35 UTC (11:35 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
      '2024.07.24 - 10:00 UTC (6:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
      '2024.07.22 - 17:40 UTC (13:40 EDT) The PTS is currently available.',
      '2024.07.22 - 12:10 UTC (8:10 EDT) The North American PC/Mac megaserver is currently available. The European PC/Mac megaserver is currently available.',
      '2024.07.22 - 12:00 UTC (8:00 EDT)) The PTS is currently unavailable while we perform maintenance.',
      '2024.07.22 - 8:00 UTC (4:00 EDT) The North American PC/Mac megaserver is currently unavailable while we perform maintenance. The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
      '2024.07.19 - 4:20 UTC (12:20 EDT) The Xbox Live™ service interruption has been resolved.',
      '2024.07.19 - 0:00 UTC (07.18.24 - 20:00 EDT) Xbox Live™ is currently experiencing a service interruption.',
      '2024.07.15 - 21:00 UTC (17:00 EDT) The PTS is currently available.',
      '2024.07.15 - 14:00 UTC (10:00 EDT)) The PTS is currently unavailable while we perform maintenance.',
      '2024.07.10 - 16:00 UTC (12:00 EDT) The issues related to logging in to the North American PlayStation® megaserver have been resolved at this time.',
      '2024.07.10 - 15:00 UTC (11:00 EDT) We are currently investigating issues some players are having logging into the North American PlayStation® megaserver.',
      '2024.07.10 - 14:15 UTC (10:15 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
      '2024.07.10 - 08:00 UTC (04:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
      '2024.07.09 - 12:15 UTC (08:15 EDT) The North American PC/Mac megaserver is currently available. The European PC/Mac megaserver is currently available.',
      '2024.07.09 - 8:00 UTC (04:00 EDT) The North American PC/Mac megaserver is currently unavailable while we perform maintenance. The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
      '2024.07.08 - 20:00 UTC (16:00 EDT) The PTS is currently available.',
      '2024.07.08 - 12:00 UTC (8:00 EDT)) The PTS is currently unavailable while we perform maintenance.',
      '2024.07.03 - 01:20 UTC (2024.07.02 - 21:20 EDT) The Xbox Live™ service interruption has been resolved.',
      '2024.07.02 - 18:30 UTC (14:00 EDT) Xbox Live™ is currently experiencing a service interruption.',
      '2024.07.01 - 14:30 UTC (10:30 EDT) The European megaservers are currently available.',
      '2024.07.01 - 12:00 UTC (08:00 EDT) The North American megaservers are currently available. The ESO store and account system are currently available.',
      '2024.07.01 - 8:00 UTC (04:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
      '2024.06.18 - 9:00 UTC (5:00 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
      '2024.06.18 - 2:00 UTC (2024.06.17 - 22:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
      '2024.06.17 - 11:25 UTC (7:25 EDT) The North American PC/Mac megaserver is currently available. The European PC/Mac megaserver is currently available.',
      '2024.06.17 - 8:00 UTC (04:00 EDT) The North American PC/Mac megaserver is currently unavailable while we perform maintenance. The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
      '2024.06.11 - 14:50 UTC (10:50 EDT) The PTS is currently available.',
      '2024.06.11 - 14:00 UTC (10:00 EDT)) The PTS is currently unavailable while we perform maintenance.',
      '2024.06.05 - 14:30 UTC (10:30 EDT) The ESO store and account system are currently available.',
      '2024.06.05 - 12:15 UTC (8:15 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
      '2024.06.05 - 12:00 UTC (8:00 EDT) The ESO store and account system are currently unavailable while we perform maintenance.',
      '2024.06.05 - 10:00 UTC (06:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
      '2024.06.03 - 12:00 UTC (08:00 EDT) The North American PC/Mac megaserver is currently available. The European PC/Mac megaserver is currently available.',
      '2024.06.03 - 6:00 UTC (02:00 EDT) The North American PC/Mac megaserver is currently unavailable while we perform maintenance. The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
    ],
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.19 - 16:00 UTC (12:00 EDT) The European PC/Mac megaserver is currently available.',
        slug: 'server_pc_eu',
        type: 'server',
        support: 'pc',
        zone: 'eu',
        status: 'up',
        rawSlug: 'The European PC/Mac megaserver',
        rawDate: '2024.08.19 - 16:00 UTC (12:00 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.19 - 8:00 UTC (4:00 EDT) The North American PC/Mac megaserver is currently unavailable while we perform maintenance. The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
        slug: 'server_pc_na',
        type: 'server',
        support: 'pc',
        zone: 'na',
        status: 'down',
        rawSlug: 'The North American PC/Mac megaserver',
        rawDate: '2024.08.19 - 8:00 UTC (4:00 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently unavailable',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.08 - 15:30 UTC (11:30 EDT) The issues related to logging in to the North American and European Xbox megaservers have been resolved at this time.',
        slug: 'server_xbox_eu',
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        status: 'up',
        rawSlug: 'North American and European Xbox megaservers',
        rawDate: '2024.08.08 - 15:30 UTC (11:30 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 8)
            .set('hours', 15)
            .set('minutes', 30)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'been resolved',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.08 - 15:30 UTC (11:30 EDT) The issues related to logging in to the North American and European Xbox megaservers have been resolved at this time.',
        slug: 'server_xbox_na',
        type: 'server',
        support: 'xbox',
        zone: 'na',
        status: 'up',
        rawSlug: 'North American and European Xbox megaservers',
        rawDate: '2024.08.08 - 15:30 UTC (11:30 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 8)
            .set('hours', 15)
            .set('minutes', 30)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'been resolved',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        slug: 'server_ps_eu',
        type: 'server',
        support: 'ps',
        zone: 'eu',
        status: 'up',
        rawSlug: 'The European megaservers',
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 15)
            .set('minutes', 45)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        slug: 'server_ps_na',
        type: 'server',
        support: 'ps',
        zone: 'na',
        status: 'up',
        rawSlug: 'The North American megaservers',
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 15)
            .set('minutes', 45)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        slug: 'server_pc_pts',
        type: 'server',
        support: 'pc',
        zone: 'pts',
        status: 'up',
        rawSlug: 'PTS',
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 15)
            .set('minutes', 45)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        slug: 'service_store_eso',
        type: 'service',
        support: 'store',
        zone: 'eso',
        status: 'up',
        rawSlug: 'ESO store',
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 15)
            .set('minutes', 45)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        slug: 'service_system_account',
        type: 'service',
        support: 'system',
        zone: 'account',
        status: 'up',
        rawSlug: 'account system',
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 15)
            .set('minutes', 45)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
    ],
  },
  {
    url: ServiceAlertsUrl,
    date: '2024-08-19T17_12_44',
    file: '2024-08-19T17_12_44.html',
    rawList: [
      '2024.08.19 - 17:00 UTC (13:00 EDT) The North American PC/Mac megaserver is currently available.',
      '2024.08.19 - 16:00 UTC (12:00 EDT) The European PC/Mac megaserver is currently available.',
      '2024.08.19 - 8:00 UTC (4:00 EDT) The North American PC/Mac megaserver is currently unavailable while we perform maintenance. The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
      '2024.08.08 - 15:30 UTC (11:30 EDT) The issues related to logging in to the North American and European Xbox megaservers have been resolved at this time.',
      '2024.08.08 - 14:50 UTC (10:50 EDT) We are currently investigating issues some players are having logging into the North American and European Xbox megaservers.',
      '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
      '2024.08.07 - 8:00 UTC (4:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The PTS is currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
      '2024.08.05 - 18:00 UTC (14:00 EDT) The PTS is currently available.',
      '2024.08.05 - 14:00 UTC (10:00 EDT)) The PTS is currently unavailable while we perform maintenance.',
      '2024.07.29 - 18:00 UTC (14:00 EDT) The PTS is currently available.',
      '2024.07.29 - 14:00 UTC (10:00 EDT)) The PTS is currently unavailable while we perform maintenance.',
      '2024.07.24 - 15:35 UTC (11:35 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
      '2024.07.24 - 10:00 UTC (6:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
      '2024.07.22 - 17:40 UTC (13:40 EDT) The PTS is currently available.',
      '2024.07.22 - 12:10 UTC (8:10 EDT) The North American PC/Mac megaserver is currently available. The European PC/Mac megaserver is currently available.',
      '2024.07.22 - 12:00 UTC (8:00 EDT)) The PTS is currently unavailable while we perform maintenance.',
      '2024.07.22 - 8:00 UTC (4:00 EDT) The North American PC/Mac megaserver is currently unavailable while we perform maintenance. The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
      '2024.07.19 - 4:20 UTC (12:20 EDT) The Xbox Live™ service interruption has been resolved.',
      '2024.07.19 - 0:00 UTC (07.18.24 - 20:00 EDT) Xbox Live™ is currently experiencing a service interruption.',
      '2024.07.15 - 21:00 UTC (17:00 EDT) The PTS is currently available.',
      '2024.07.15 - 14:00 UTC (10:00 EDT)) The PTS is currently unavailable while we perform maintenance.',
      '2024.07.10 - 16:00 UTC (12:00 EDT) The issues related to logging in to the North American PlayStation® megaserver have been resolved at this time.',
      '2024.07.10 - 15:00 UTC (11:00 EDT) We are currently investigating issues some players are having logging into the North American PlayStation® megaserver.',
      '2024.07.10 - 14:15 UTC (10:15 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
      '2024.07.10 - 08:00 UTC (04:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
      '2024.07.09 - 12:15 UTC (08:15 EDT) The North American PC/Mac megaserver is currently available. The European PC/Mac megaserver is currently available.',
      '2024.07.09 - 8:00 UTC (04:00 EDT) The North American PC/Mac megaserver is currently unavailable while we perform maintenance. The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
      '2024.07.08 - 20:00 UTC (16:00 EDT) The PTS is currently available.',
      '2024.07.08 - 12:00 UTC (8:00 EDT)) The PTS is currently unavailable while we perform maintenance.',
      '2024.07.03 - 01:20 UTC (2024.07.02 - 21:20 EDT) The Xbox Live™ service interruption has been resolved.',
      '2024.07.02 - 18:30 UTC (14:00 EDT) Xbox Live™ is currently experiencing a service interruption.',
      '2024.07.01 - 14:30 UTC (10:30 EDT) The European megaservers are currently available.',
      '2024.07.01 - 12:00 UTC (08:00 EDT) The North American megaservers are currently available. The ESO store and account system are currently available.',
      '2024.07.01 - 8:00 UTC (04:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
      '2024.06.18 - 9:00 UTC (5:00 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
      '2024.06.18 - 2:00 UTC (2024.06.17 - 22:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
      '2024.06.17 - 11:25 UTC (7:25 EDT) The North American PC/Mac megaserver is currently available. The European PC/Mac megaserver is currently available.',
      '2024.06.17 - 8:00 UTC (04:00 EDT) The North American PC/Mac megaserver is currently unavailable while we perform maintenance. The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
      '2024.06.11 - 14:50 UTC (10:50 EDT) The PTS is currently available.',
      '2024.06.11 - 14:00 UTC (10:00 EDT)) The PTS is currently unavailable while we perform maintenance.',
      '2024.06.05 - 14:30 UTC (10:30 EDT) The ESO store and account system are currently available.',
      '2024.06.05 - 12:15 UTC (8:15 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
      '2024.06.05 - 12:00 UTC (8:00 EDT) The ESO store and account system are currently unavailable while we perform maintenance.',
      '2024.06.05 - 10:00 UTC (06:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
      '2024.06.03 - 12:00 UTC (08:00 EDT) The North American PC/Mac megaserver is currently available. The European PC/Mac megaserver is currently available.',
      '2024.06.03 - 6:00 UTC (02:00 EDT) The North American PC/Mac megaserver is currently unavailable while we perform maintenance. The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
    ],
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.19 - 17:00 UTC (13:00 EDT) The North American PC/Mac megaserver is currently available.',
        slug: 'server_pc_na',
        type: 'server',
        support: 'pc',
        zone: 'na',
        status: 'up',
        rawSlug: 'The North American PC/Mac megaserver',
        rawDate: '2024.08.19 - 17:00 UTC (13:00 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 17)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.19 - 16:00 UTC (12:00 EDT) The European PC/Mac megaserver is currently available.',
        slug: 'server_pc_eu',
        type: 'server',
        support: 'pc',
        zone: 'eu',
        status: 'up',
        rawSlug: 'The European PC/Mac megaserver',
        rawDate: '2024.08.19 - 16:00 UTC (12:00 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.08 - 15:30 UTC (11:30 EDT) The issues related to logging in to the North American and European Xbox megaservers have been resolved at this time.',
        slug: 'server_xbox_eu',
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        status: 'up',
        rawSlug: 'North American and European Xbox megaservers',
        rawDate: '2024.08.08 - 15:30 UTC (11:30 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 8)
            .set('hours', 15)
            .set('minutes', 30)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'been resolved',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.08 - 15:30 UTC (11:30 EDT) The issues related to logging in to the North American and European Xbox megaservers have been resolved at this time.',
        slug: 'server_xbox_na',
        type: 'server',
        support: 'xbox',
        zone: 'na',
        status: 'up',
        rawSlug: 'North American and European Xbox megaservers',
        rawDate: '2024.08.08 - 15:30 UTC (11:30 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 8)
            .set('hours', 15)
            .set('minutes', 30)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'been resolved',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        slug: 'server_ps_eu',
        type: 'server',
        support: 'ps',
        zone: 'eu',
        status: 'up',
        rawSlug: 'The European megaservers',
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 15)
            .set('minutes', 45)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        slug: 'server_ps_na',
        type: 'server',
        support: 'ps',
        zone: 'na',
        status: 'up',
        rawSlug: 'The North American megaservers',
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 15)
            .set('minutes', 45)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        slug: 'server_pc_pts',
        type: 'server',
        support: 'pc',
        zone: 'pts',
        status: 'up',
        rawSlug: 'PTS',
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 15)
            .set('minutes', 45)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        slug: 'service_store_eso',
        type: 'service',
        support: 'store',
        zone: 'eso',
        status: 'up',
        rawSlug: 'ESO store',
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 15)
            .set('minutes', 45)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        slug: 'service_system_account',
        type: 'service',
        support: 'system',
        zone: 'account',
        status: 'up',
        rawSlug: 'account system',
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 15)
            .set('minutes', 45)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
    ],
  },
];

export default pattern;
