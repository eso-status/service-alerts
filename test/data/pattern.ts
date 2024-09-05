import * as moment from 'moment/moment';
import { PatternItem } from '../interface/patternItem.interface';
import ServiceAlertsUrl from '../../src/const';

const pattern: PatternItem[] = [
  {
    url: ServiceAlertsUrl,
    date: '2024-08-13T12_16_34',
    file: '2024-08-13T12_16_34.html',
    expected: [
      {
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.08 - 15:30 UTC (11:30 EDT) The issues related to logging in to the North American and European Xbox megaservers have been resolved at this time.',
        ],
        slugs: ['server_xbox_eu'],
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
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.08 - 15:30 UTC (11:30 EDT) The issues related to logging in to the North American and European Xbox megaservers have been resolved at this time.',
        ],
        slugs: ['server_xbox_na'],
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
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        ],
        slugs: ['server_pc_eu'],
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
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        ],
        slugs: ['server_ps_eu'],
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
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        ],
        slugs: ['server_pc_na'],
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
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        ],
        slugs: ['server_ps_na'],
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
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        ],
        slugs: ['server_pc_pts'],
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
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        ],
        slugs: ['service_store_eso'],
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
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        ],
        slugs: ['service_system_account'],
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
    expected: [
      {
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.19 - 16:00 UTC (12:00 EDT) The European PC/Mac megaserver is currently available.',
        ],
        slugs: ['server_pc_eu'],
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
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.19 - 8:00 UTC (4:00 EDT) The North American PC/Mac megaserver is currently unavailable while we perform maintenance. The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
        ],
        slugs: ['server_pc_na'],
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
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.08 - 15:30 UTC (11:30 EDT) The issues related to logging in to the North American and European Xbox megaservers have been resolved at this time.',
        ],
        slugs: ['server_xbox_eu'],
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
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.08 - 15:30 UTC (11:30 EDT) The issues related to logging in to the North American and European Xbox megaservers have been resolved at this time.',
        ],
        slugs: ['server_xbox_na'],
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
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        ],
        slugs: ['server_ps_eu'],
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
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        ],
        slugs: ['server_ps_na'],
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
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        ],
        slugs: ['server_pc_pts'],
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
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        ],
        slugs: ['service_store_eso'],
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
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        ],
        slugs: ['service_system_account'],
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
    expected: [
      {
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.19 - 17:00 UTC (13:00 EDT) The North American PC/Mac megaserver is currently available.',
        ],
        slugs: ['server_pc_na'],
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
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.19 - 16:00 UTC (12:00 EDT) The European PC/Mac megaserver is currently available.',
        ],
        slugs: ['server_pc_eu'],
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
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.08 - 15:30 UTC (11:30 EDT) The issues related to logging in to the North American and European Xbox megaservers have been resolved at this time.',
        ],
        slugs: ['server_xbox_eu'],
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
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.08 - 15:30 UTC (11:30 EDT) The issues related to logging in to the North American and European Xbox megaservers have been resolved at this time.',
        ],
        slugs: ['server_xbox_na'],
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
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        ],
        slugs: ['server_ps_eu'],
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
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        ],
        slugs: ['server_ps_na'],
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
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        ],
        slugs: ['server_pc_pts'],
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
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        ],
        slugs: ['service_store_eso'],
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
        sources: [ServiceAlertsUrl],
        raw: [
          '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        ],
        slugs: ['service_system_account'],
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
