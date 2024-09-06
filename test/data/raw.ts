import * as moment from 'moment';
import { RawItem } from '../interface/rawItem.interface';
import ServiceAlertsUrl from '../../src/const';

const raw: RawItem[] = [
  {
    date: '2024-08-19T17_12_44',
    url: ServiceAlertsUrl,
    raw: '2024.08.19 - 17:00 UTC (13:00 EDT) The North American PC/Mac megaserver is currently available.',
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.19 - 17:00 UTC (13:00 EDT) The North American PC/Mac megaserver is currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'server_pc_na',
        rawSlug: 'The North American PC/Mac megaserver',
        type: 'server',
        support: 'pc',
        zone: 'na',
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
        rawDate: '2024.08.19 - 17:00 UTC (13:00 EDT)',
      },
    ],
  },
  {
    date: '2024-08-19T17_12_44',
    url: ServiceAlertsUrl,
    raw: '2024.08.19 - 16:00 UTC (12:00 EDT) The European PC/Mac megaserver is currently available.',
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.19 - 16:00 UTC (12:00 EDT) The European PC/Mac megaserver is currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'server_pc_eu',
        rawSlug: 'The European PC/Mac megaserver',
        type: 'server',
        support: 'pc',
        zone: 'eu',
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
        rawDate: '2024.08.19 - 16:00 UTC (12:00 EDT)',
      },
    ],
  },
  {
    date: '2024-08-19T17_12_44',
    url: ServiceAlertsUrl,
    raw: '2024.08.19 - 16:00 UTC (12:00 EDT) The European PC/Mac megaserver is currently available.',
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.19 - 16:00 UTC (12:00 EDT) The European PC/Mac megaserver is currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'server_pc_eu',
        rawSlug: 'The European PC/Mac megaserver',
        type: 'server',
        support: 'pc',
        zone: 'eu',
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
        rawDate: '2024.08.19 - 16:00 UTC (12:00 EDT)',
      },
    ],
  },
  {
    date: '2024-08-13T12_16_34',
    url: ServiceAlertsUrl,
    raw: '2024.08.08 - 15:30 UTC (11:30 EDT) The issues related to logging in to the North American and European Xbox megaservers have been resolved at this time.',
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.08 - 15:30 UTC (11:30 EDT) The issues related to logging in to the North American and European Xbox megaservers have been resolved at this time.',
        status: 'up',
        rawStatus: 'been resolved',
        slug: 'server_xbox_eu',
        rawSlug: 'North American and European Xbox megaservers',
        type: 'server',
        support: 'xbox',
        zone: 'eu',
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
        rawDate: '2024.08.08 - 15:30 UTC (11:30 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.08 - 15:30 UTC (11:30 EDT) The issues related to logging in to the North American and European Xbox megaservers have been resolved at this time.',
        status: 'up',
        rawStatus: 'been resolved',
        slug: 'server_xbox_na',
        rawSlug: 'North American and European Xbox megaservers',
        type: 'server',
        support: 'xbox',
        zone: 'na',
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
        rawDate: '2024.08.08 - 15:30 UTC (11:30 EDT)',
      },
    ],
  },
  {
    date: '2024-08-13T12_16_34',
    url: ServiceAlertsUrl,
    raw: '2024.08.08 - 14:50 UTC (10:50 EDT) We are currently investigating issues some players are having logging into the North American and European Xbox megaservers.',
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.08 - 14:50 UTC (10:50 EDT) We are currently investigating issues some players are having logging into the North American and European Xbox megaservers.',
        status: 'issues',
        rawStatus: 'currently investigating issues',
        slug: 'server_xbox_eu',
        rawSlug: 'North American and European Xbox megaservers',
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 8)
            .set('hours', 14)
            .set('minutes', 50)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.08.08 - 14:50 UTC (10:50 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.08 - 14:50 UTC (10:50 EDT) We are currently investigating issues some players are having logging into the North American and European Xbox megaservers.',
        status: 'issues',
        rawStatus: 'currently investigating issues',
        slug: 'server_xbox_na',
        rawSlug: 'North American and European Xbox megaservers',
        type: 'server',
        support: 'xbox',
        zone: 'na',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 8)
            .set('hours', 14)
            .set('minutes', 50)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.08.08 - 14:50 UTC (10:50 EDT)',
      },
    ],
  },
  {
    date: '2024-08-13T12_16_34',
    url: ServiceAlertsUrl,
    raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'server_pc_eu',
        rawSlug: 'The European megaservers',
        type: 'server',
        support: 'pc',
        zone: 'eu',
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
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'server_ps_eu',
        rawSlug: 'The European megaservers',
        type: 'server',
        support: 'ps',
        zone: 'eu',
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
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'server_xbox_eu',
        rawSlug: 'The European megaservers',
        type: 'server',
        support: 'xbox',
        zone: 'eu',
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
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'server_pc_na',
        rawSlug: 'The North American megaservers',
        type: 'server',
        support: 'pc',
        zone: 'na',
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
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'server_ps_na',
        rawSlug: 'The North American megaservers',
        type: 'server',
        support: 'ps',
        zone: 'na',
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
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'server_xbox_na',
        rawSlug: 'The North American megaservers',
        type: 'server',
        support: 'xbox',
        zone: 'na',
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
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'server_pc_pts',
        rawSlug: 'PTS',
        type: 'server',
        support: 'pc',
        zone: 'pts',
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
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'service_store_eso',
        rawSlug: 'ESO store',
        type: 'service',
        support: 'store',
        zone: 'eso',
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
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 15:45 UTC (11:45 EDT) The North American megaservers are currently available. The European megaservers are currently available. The PTS is currently available. The ESO store and account system are currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'service_system_account',
        rawSlug: 'account system',
        type: 'service',
        support: 'system',
        zone: 'account',
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
        rawDate: '2024.08.07 - 15:45 UTC (11:45 EDT)',
      },
    ],
  },
  {
    date: '2024-08-13T12_16_34',
    url: ServiceAlertsUrl,
    raw: '2024.08.07 - 8:00 UTC (4:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The PTS is currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 8:00 UTC (4:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The PTS is currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'server_pc_eu',
        rawSlug: 'The European megaservers',
        type: 'server',
        support: 'pc',
        zone: 'eu',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.08.07 - 8:00 UTC (4:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 8:00 UTC (4:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The PTS is currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'server_ps_eu',
        rawSlug: 'The European megaservers',
        type: 'server',
        support: 'ps',
        zone: 'eu',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.08.07 - 8:00 UTC (4:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 8:00 UTC (4:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The PTS is currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'server_xbox_eu',
        rawSlug: 'The European megaservers',
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.08.07 - 8:00 UTC (4:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 8:00 UTC (4:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The PTS is currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'server_pc_na',
        rawSlug: 'The North American megaservers',
        type: 'server',
        support: 'pc',
        zone: 'na',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.08.07 - 8:00 UTC (4:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 8:00 UTC (4:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The PTS is currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'server_ps_na',
        rawSlug: 'The North American megaservers',
        type: 'server',
        support: 'ps',
        zone: 'na',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.08.07 - 8:00 UTC (4:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 8:00 UTC (4:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The PTS is currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'server_xbox_na',
        rawSlug: 'The North American megaservers',
        type: 'server',
        support: 'xbox',
        zone: 'na',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.08.07 - 8:00 UTC (4:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 8:00 UTC (4:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The PTS is currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'server_pc_pts',
        rawSlug: 'PTS',
        type: 'server',
        support: 'pc',
        zone: 'pts',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.08.07 - 8:00 UTC (4:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 8:00 UTC (4:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The PTS is currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'service_store_eso',
        rawSlug: 'ESO store',
        type: 'service',
        support: 'store',
        zone: 'eso',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.08.07 - 8:00 UTC (4:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.08.07 - 8:00 UTC (4:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The PTS is currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'service_system_account',
        rawSlug: 'account system',
        type: 'service',
        support: 'system',
        zone: 'account',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 7)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.08.07 - 8:00 UTC (4:00 EDT)',
      },
    ],
  },
  {
    date: '2024-08-13T12_16_34',
    url: ServiceAlertsUrl,
    raw: '2024.07.19 - 4:20 UTC (12:20 EDT) The Xbox Live™ service interruption has been resolved.',
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.19 - 4:20 UTC (12:20 EDT) The Xbox Live™ service interruption has been resolved.',
        status: 'up',
        rawStatus: 'been resolved',
        slug: 'server_xbox_eu',
        rawSlug: 'Xbox Live™',
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 19)
            .set('hours', 4)
            .set('minutes', 20)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.19 - 4:20 UTC (12:20 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.19 - 4:20 UTC (12:20 EDT) The Xbox Live™ service interruption has been resolved.',
        status: 'up',
        rawStatus: 'been resolved',
        slug: 'server_xbox_na',
        rawSlug: 'Xbox Live™',
        type: 'server',
        support: 'xbox',
        zone: 'na',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 19)
            .set('hours', 4)
            .set('minutes', 20)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.19 - 4:20 UTC (12:20 EDT)',
      },
    ],
  },
  {
    date: '2024-08-13T12_16_34',
    url: ServiceAlertsUrl,
    raw: '2024.07.19 - 0:00 UTC (07.18.24 - 20:00 EDT) Xbox Live™ is currently experiencing a service interruption.',
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.19 - 0:00 UTC (07.18.24 - 20:00 EDT) Xbox Live™ is currently experiencing a service interruption.',
        status: 'issues',
        rawStatus: 'currently experiencing a service interruption',
        slug: 'server_xbox_eu',
        rawSlug: 'Xbox Live™',
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 19)
            .set('hours', 0)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.19 - 0:00 UTC (07.18.24 - 20:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.19 - 0:00 UTC (07.18.24 - 20:00 EDT) Xbox Live™ is currently experiencing a service interruption.',
        status: 'issues',
        rawStatus: 'currently experiencing a service interruption',
        slug: 'server_xbox_na',
        rawSlug: 'Xbox Live™',
        type: 'server',
        support: 'xbox',
        zone: 'na',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 19)
            .set('hours', 0)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.19 - 0:00 UTC (07.18.24 - 20:00 EDT)',
      },
    ],
  },
  {
    date: '2024-08-13T12_16_34',
    url: ServiceAlertsUrl,
    raw: '2024.07.10 - 16:00 UTC (12:00 EDT) The issues related to logging in to the North American PlayStation® megaserver have been resolved at this time.',
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.10 - 16:00 UTC (12:00 EDT) The issues related to logging in to the North American PlayStation® megaserver have been resolved at this time.',
        status: 'up',
        rawStatus: 'been resolved',
        slug: 'server_ps_na',
        rawSlug: 'North American PlayStation® megaserver',
        type: 'server',
        support: 'ps',
        zone: 'na',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 10)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.10 - 16:00 UTC (12:00 EDT)',
      },
    ],
  },
  {
    date: '2024-08-13T12_16_34',
    url: ServiceAlertsUrl,
    raw: '2024.07.10 - 15:00 UTC (11:00 EDT) We are currently investigating issues some players are having logging into the North American PlayStation® megaserver.',
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.10 - 15:00 UTC (11:00 EDT) We are currently investigating issues some players are having logging into the North American PlayStation® megaserver.',
        status: 'issues',
        rawStatus: 'currently investigating issues',
        slug: 'server_ps_na',
        rawSlug: 'North American PlayStation® megaserver',
        type: 'server',
        support: 'ps',
        zone: 'na',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 10)
            .set('hours', 15)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.10 - 15:00 UTC (11:00 EDT)',
      },
    ],
  },
  {
    date: '2024-08-13T12_16_34',
    url: ServiceAlertsUrl,
    raw: '2024.07.03 - 01:20 UTC (2024.07.02 - 21:20 EDT) The Xbox Live™ service interruption has been resolved.',
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.03 - 01:20 UTC (2024.07.02 - 21:20 EDT) The Xbox Live™ service interruption has been resolved.',
        status: 'up',
        rawStatus: 'been resolved',
        slug: 'server_xbox_eu',
        rawSlug: 'Xbox Live™',
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 3)
            .set('hours', 1)
            .set('minutes', 20)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.03 - 01:20 UTC (2024.07.02 - 21:20 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.03 - 01:20 UTC (2024.07.02 - 21:20 EDT) The Xbox Live™ service interruption has been resolved.',
        status: 'up',
        rawStatus: 'been resolved',
        slug: 'server_xbox_na',
        rawSlug: 'Xbox Live™',
        type: 'server',
        support: 'xbox',
        zone: 'na',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 3)
            .set('hours', 1)
            .set('minutes', 20)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.03 - 01:20 UTC (2024.07.02 - 21:20 EDT)',
      },
    ],
  },
  {
    date: '2024-08-13T12_16_34',
    url: ServiceAlertsUrl,
    raw: '2024.07.02 - 18:30 UTC (14:00 EDT) Xbox Live™ is currently experiencing a service interruption.',
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.02 - 18:30 UTC (14:00 EDT) Xbox Live™ is currently experiencing a service interruption.',
        status: 'issues',
        rawStatus: 'currently experiencing a service interruption',
        slug: 'server_xbox_eu',
        rawSlug: 'Xbox Live™',
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 2)
            .set('hours', 18)
            .set('minutes', 30)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.02 - 18:30 UTC (14:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.02 - 18:30 UTC (14:00 EDT) Xbox Live™ is currently experiencing a service interruption.',
        status: 'issues',
        rawStatus: 'currently experiencing a service interruption',
        slug: 'server_xbox_na',
        rawSlug: 'Xbox Live™',
        type: 'server',
        support: 'xbox',
        zone: 'na',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 2)
            .set('hours', 18)
            .set('minutes', 30)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.02 - 18:30 UTC (14:00 EDT)',
      },
    ],
  },
  {
    date: '2024-08-13T12_16_34',
    url: ServiceAlertsUrl,
    raw: '2024.07.01 - 14:30 UTC (10:30 EDT) The European megaservers are currently available.',
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.01 - 14:30 UTC (10:30 EDT) The European megaservers are currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'server_pc_eu',
        rawSlug: 'The European megaservers',
        type: 'server',
        support: 'pc',
        zone: 'eu',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 1)
            .set('hours', 14)
            .set('minutes', 30)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.01 - 14:30 UTC (10:30 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.01 - 14:30 UTC (10:30 EDT) The European megaservers are currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'server_ps_eu',
        rawSlug: 'The European megaservers',
        type: 'server',
        support: 'ps',
        zone: 'eu',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 1)
            .set('hours', 14)
            .set('minutes', 30)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.01 - 14:30 UTC (10:30 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.01 - 14:30 UTC (10:30 EDT) The European megaservers are currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'server_xbox_eu',
        rawSlug: 'The European megaservers',
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 1)
            .set('hours', 14)
            .set('minutes', 30)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.01 - 14:30 UTC (10:30 EDT)',
      },
    ],
  },
  {
    date: '2024-08-13T12_16_34',
    url: ServiceAlertsUrl,
    raw: '2024.07.01 - 12:00 UTC (08:00 EDT) The North American megaservers are currently available. The ESO store and account system are currently available.',
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.01 - 12:00 UTC (08:00 EDT) The North American megaservers are currently available. The ESO store and account system are currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'server_pc_na',
        rawSlug: 'The North American megaservers',
        type: 'server',
        support: 'pc',
        zone: 'na',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 1)
            .set('hours', 12)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.01 - 12:00 UTC (08:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.01 - 12:00 UTC (08:00 EDT) The North American megaservers are currently available. The ESO store and account system are currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'server_ps_na',
        rawSlug: 'The North American megaservers',
        type: 'server',
        support: 'ps',
        zone: 'na',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 1)
            .set('hours', 12)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.01 - 12:00 UTC (08:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.01 - 12:00 UTC (08:00 EDT) The North American megaservers are currently available. The ESO store and account system are currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'server_xbox_na',
        rawSlug: 'The North American megaservers',
        type: 'server',
        support: 'xbox',
        zone: 'na',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 1)
            .set('hours', 12)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.01 - 12:00 UTC (08:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.01 - 12:00 UTC (08:00 EDT) The North American megaservers are currently available. The ESO store and account system are currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'service_store_eso',
        rawSlug: 'ESO store',
        type: 'service',
        support: 'store',
        zone: 'eso',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 1)
            .set('hours', 12)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.01 - 12:00 UTC (08:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.01 - 12:00 UTC (08:00 EDT) The North American megaservers are currently available. The ESO store and account system are currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'service_system_account',
        rawSlug: 'account system',
        type: 'service',
        support: 'system',
        zone: 'account',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 1)
            .set('hours', 12)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.01 - 12:00 UTC (08:00 EDT)',
      },
    ],
  },
  {
    date: '2024-08-13T12_16_34',
    url: ServiceAlertsUrl,
    raw: '2024.07.01 - 8:00 UTC (04:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.01 - 8:00 UTC (04:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'server_pc_eu',
        rawSlug: 'The European megaservers',
        type: 'server',
        support: 'pc',
        zone: 'eu',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 1)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.01 - 8:00 UTC (04:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.01 - 8:00 UTC (04:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'server_ps_eu',
        rawSlug: 'The European megaservers',
        type: 'server',
        support: 'ps',
        zone: 'eu',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 1)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.01 - 8:00 UTC (04:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.01 - 8:00 UTC (04:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'server_xbox_eu',
        rawSlug: 'The European megaservers',
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 1)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.01 - 8:00 UTC (04:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.01 - 8:00 UTC (04:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'server_pc_na',
        rawSlug: 'The North American megaservers',
        type: 'server',
        support: 'pc',
        zone: 'na',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 1)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.01 - 8:00 UTC (04:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.01 - 8:00 UTC (04:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'server_ps_na',
        rawSlug: 'The North American megaservers',
        type: 'server',
        support: 'ps',
        zone: 'na',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 1)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.01 - 8:00 UTC (04:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.01 - 8:00 UTC (04:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'server_xbox_na',
        rawSlug: 'The North American megaservers',
        type: 'server',
        support: 'xbox',
        zone: 'na',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 1)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.01 - 8:00 UTC (04:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.01 - 8:00 UTC (04:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'service_store_eso',
        rawSlug: 'ESO store',
        type: 'service',
        support: 'store',
        zone: 'eso',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 1)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.01 - 8:00 UTC (04:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.07.01 - 8:00 UTC (04:00 EDT) The North American megaservers are currently unavailable while we perform maintenance. The European megaservers are currently unavailable while we perform maintenance. The ESO store and account system are currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'service_system_account',
        rawSlug: 'account system',
        type: 'service',
        support: 'system',
        zone: 'account',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7 - 1)
            .set('date', 1)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.07.01 - 8:00 UTC (04:00 EDT)',
      },
    ],
  },
  {
    date: '2024-08-13T12_16_34',
    url: ServiceAlertsUrl,
    raw: '2024.06.11 - 14:50 UTC (10:50 EDT) The PTS is currently available.',
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.06.11 - 14:50 UTC (10:50 EDT) The PTS is currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'server_pc_pts',
        rawSlug: 'PTS',
        type: 'server',
        support: 'pc',
        zone: 'pts',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 6 - 1)
            .set('date', 11)
            .set('hours', 14)
            .set('minutes', 50)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.06.11 - 14:50 UTC (10:50 EDT)',
      },
    ],
  },
  {
    date: '2024-08-13T12_16_34',
    url: ServiceAlertsUrl,
    raw: '2024.06.11 - 14:00 UTC (10:00 EDT)) The PTS is currently unavailable while we perform maintenance.',
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.06.11 - 14:00 UTC (10:00 EDT)) The PTS is currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'server_pc_pts',
        rawSlug: 'PTS',
        type: 'server',
        support: 'pc',
        zone: 'pts',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 6 - 1)
            .set('date', 11)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.06.11 - 14:00 UTC (10:00 EDT)',
      },
    ],
  },
  {
    date: '2024-08-13T12_16_34',
    url: ServiceAlertsUrl,
    raw: '2024.06.05 - 14:30 UTC (10:30 EDT) The ESO store and account system are currently available.',
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.06.05 - 14:30 UTC (10:30 EDT) The ESO store and account system are currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'service_store_eso',
        rawSlug: 'ESO store',
        type: 'service',
        support: 'store',
        zone: 'eso',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 6 - 1)
            .set('date', 5)
            .set('hours', 14)
            .set('minutes', 30)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.06.05 - 14:30 UTC (10:30 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.06.05 - 14:30 UTC (10:30 EDT) The ESO store and account system are currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'service_system_account',
        rawSlug: 'account system',
        type: 'service',
        support: 'system',
        zone: 'account',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 6 - 1)
            .set('date', 5)
            .set('hours', 14)
            .set('minutes', 30)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.06.05 - 14:30 UTC (10:30 EDT)',
      },
    ],
  },
  {
    date: '2024-08-13T12_16_34',
    url: ServiceAlertsUrl,
    raw: '2024.06.05 - 12:15 UTC (8:15 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.06.05 - 12:15 UTC (8:15 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'server_ps_eu',
        rawSlug: 'The European PlayStation® megaserver',
        type: 'server',
        support: 'ps',
        zone: 'eu',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 6 - 1)
            .set('date', 5)
            .set('hours', 12)
            .set('minutes', 15)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.06.05 - 12:15 UTC (8:15 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.06.05 - 12:15 UTC (8:15 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'server_xbox_eu',
        rawSlug: 'The European Xbox megaserver',
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 6 - 1)
            .set('date', 5)
            .set('hours', 12)
            .set('minutes', 15)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.06.05 - 12:15 UTC (8:15 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.06.05 - 12:15 UTC (8:15 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'server_ps_na',
        rawSlug: 'North American PlayStation® megaserver',
        type: 'server',
        support: 'ps',
        zone: 'na',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 6 - 1)
            .set('date', 5)
            .set('hours', 12)
            .set('minutes', 15)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.06.05 - 12:15 UTC (8:15 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.06.05 - 12:15 UTC (8:15 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'server_xbox_na',
        rawSlug: 'The North American Xbox megaserver',
        type: 'server',
        support: 'xbox',
        zone: 'na',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 6 - 1)
            .set('date', 5)
            .set('hours', 12)
            .set('minutes', 15)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.06.05 - 12:15 UTC (8:15 EDT)',
      },
    ],
  },
  {
    date: '2024-08-13T12_16_34',
    url: ServiceAlertsUrl,
    raw: '2024.06.05 - 12:00 UTC (8:00 EDT) The ESO store and account system are currently unavailable while we perform maintenance.',
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.06.05 - 12:00 UTC (8:00 EDT) The ESO store and account system are currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'service_store_eso',
        rawSlug: 'ESO store',
        type: 'service',
        support: 'store',
        zone: 'eso',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 6 - 1)
            .set('date', 5)
            .set('hours', 12)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.06.05 - 12:00 UTC (8:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.06.05 - 12:00 UTC (8:00 EDT) The ESO store and account system are currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'service_system_account',
        rawSlug: 'account system',
        type: 'service',
        support: 'system',
        zone: 'account',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 6 - 1)
            .set('date', 5)
            .set('hours', 12)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.06.05 - 12:00 UTC (8:00 EDT)',
      },
    ],
  },
  {
    date: '2024-08-13T12_16_34',
    url: ServiceAlertsUrl,
    raw: '2024.06.05 - 10:00 UTC (06:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.06.05 - 10:00 UTC (06:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'server_ps_eu',
        rawSlug: 'The European PlayStation® megaserver',
        type: 'server',
        support: 'ps',
        zone: 'eu',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 6 - 1)
            .set('date', 5)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.06.05 - 10:00 UTC (06:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.06.05 - 10:00 UTC (06:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'server_xbox_eu',
        rawSlug: 'The European Xbox megaserver',
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 6 - 1)
            .set('date', 5)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.06.05 - 10:00 UTC (06:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.06.05 - 10:00 UTC (06:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'server_ps_na',
        rawSlug: 'North American PlayStation® megaserver',
        type: 'server',
        support: 'ps',
        zone: 'na',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 6 - 1)
            .set('date', 5)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.06.05 - 10:00 UTC (06:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.06.05 - 10:00 UTC (06:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'server_xbox_na',
        rawSlug: 'The North American Xbox megaserver',
        type: 'server',
        support: 'xbox',
        zone: 'na',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 6 - 1)
            .set('date', 5)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.06.05 - 10:00 UTC (06:00 EDT)',
      },
    ],
  },
  {
    date: '2024-08-13T12_16_34',
    url: ServiceAlertsUrl,
    raw: '2024.06.03 - 12:00 UTC (08:00 EDT) The North American PC/Mac megaserver is currently available. The European PC/Mac megaserver is currently available.',
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.06.03 - 12:00 UTC (08:00 EDT) The North American PC/Mac megaserver is currently available. The European PC/Mac megaserver is currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'server_pc_eu',
        rawSlug: 'The European PC/Mac megaserver',
        type: 'server',
        support: 'pc',
        zone: 'eu',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 6 - 1)
            .set('date', 3)
            .set('hours', 12)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.06.03 - 12:00 UTC (08:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.06.03 - 12:00 UTC (08:00 EDT) The North American PC/Mac megaserver is currently available. The European PC/Mac megaserver is currently available.',
        status: 'up',
        rawStatus: 'currently available',
        slug: 'server_pc_na',
        rawSlug: 'The North American PC/Mac megaserver',
        type: 'server',
        support: 'pc',
        zone: 'na',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 6 - 1)
            .set('date', 3)
            .set('hours', 12)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.06.03 - 12:00 UTC (08:00 EDT)',
      },
    ],
  },
  {
    date: '2024-08-13T12_16_34',
    url: ServiceAlertsUrl,
    raw: '2024.06.03 - 6:00 UTC (02:00 EDT) The North American PC/Mac megaserver is currently unavailable while we perform maintenance. The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
    expected: [
      {
        source: ServiceAlertsUrl,
        raw: '2024.06.03 - 6:00 UTC (02:00 EDT) The North American PC/Mac megaserver is currently unavailable while we perform maintenance. The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'server_pc_eu',
        rawSlug: 'The European PC/Mac megaserver',
        type: 'server',
        support: 'pc',
        zone: 'eu',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 6 - 1)
            .set('date', 3)
            .set('hours', 6)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.06.03 - 6:00 UTC (02:00 EDT)',
      },
      {
        source: ServiceAlertsUrl,
        raw: '2024.06.03 - 6:00 UTC (02:00 EDT) The North American PC/Mac megaserver is currently unavailable while we perform maintenance. The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
        status: 'down',
        rawStatus: 'currently unavailable',
        slug: 'server_pc_na',
        rawSlug: 'The North American PC/Mac megaserver',
        type: 'server',
        support: 'pc',
        zone: 'na',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 6 - 1)
            .set('date', 3)
            .set('hours', 6)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawDate: '2024.06.03 - 6:00 UTC (02:00 EDT)',
      },
    ],
  },
];
export default raw;
