import * as moment from 'moment/moment';
import ServiceAlertsUrl from 'src/const';
import { PatternItem } from '../interface/patternItem.interface';

const pattern: PatternItem[] = [
  {
    url: ServiceAlertsUrl,
    file: '2024-08-13T12_16_34.html',
    expected: [
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.08 - 15:30 UTC (11:30 EDT) The issues related to logging in to the North American and European Xbox megaservers have been resolved at this time. ',
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.08 - 15:30 UTC (11:30 EDT) The issues related to logging in to the North American and European Xbox megaservers have been resolved at this time. ',
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
    file: '2024-08-19T08_06_07.html',
    expected: [
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.19 - 8:00 UTC (4:00 EDT) The North American PC/Mac megaserver is currently unavailable while we perform maintenance. The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
        ],
        slugs: ['server_pc_eu'],
        type: 'server',
        support: 'pc',
        zone: 'eu',
        status: 'down',
        rawSlug: 'The European PC/Mac megaserver',
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
    file: '2024-08-19T16_12_04.html',
    expected: [
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
    file: '2024-08-19T17_12_44.html',
    expected: [
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
    file: '2024-08-21T10_04_07.html',
    expected: [
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.21 - 10:00 UTC (6:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance.  The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance.  The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
        ],
        slugs: ['server_ps_eu'],
        type: 'server',
        support: 'ps',
        zone: 'eu',
        status: 'down',
        rawSlug: 'The European PlayStation® megaserver',
        rawDate: '2024.08.21 - 10:00 UTC (6:00 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently unavailable',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.21 - 10:00 UTC (6:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance.  The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance.  The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
        ],
        slugs: ['server_xbox_eu'],
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        status: 'down',
        rawSlug: 'The European Xbox megaserver',
        rawDate: '2024.08.21 - 10:00 UTC (6:00 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently unavailable',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.21 - 10:00 UTC (6:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance.  The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance.  The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
        ],
        slugs: ['server_ps_na'],
        type: 'server',
        support: 'ps',
        zone: 'na',
        status: 'down',
        rawSlug: 'North American PlayStation® megaserver',
        rawDate: '2024.08.21 - 10:00 UTC (6:00 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently unavailable',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.21 - 10:00 UTC (6:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance.  The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance.  The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
        ],
        slugs: ['server_xbox_na'],
        type: 'server',
        support: 'xbox',
        zone: 'na',
        status: 'down',
        rawSlug: 'The North American Xbox megaserver',
        rawDate: '2024.08.21 - 10:00 UTC (6:00 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently unavailable',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
    file: '2024-08-21T11_50_52.html',
    expected: [
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.21 - 11:50 UTC (7:50 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
        ],
        slugs: ['server_ps_eu'],
        type: 'server',
        support: 'ps',
        zone: 'eu',
        status: 'up',
        rawSlug: 'The European PlayStation® megaserver',
        rawDate: '2024.08.21 - 11:50 UTC (7:50 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 11)
            .set('minutes', 50)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.21 - 11:50 UTC (7:50 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
        ],
        slugs: ['server_xbox_eu'],
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        status: 'up',
        rawSlug: 'The European Xbox megaserver',
        rawDate: '2024.08.21 - 11:50 UTC (7:50 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 11)
            .set('minutes', 50)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.21 - 11:50 UTC (7:50 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
        ],
        slugs: ['server_ps_na'],
        type: 'server',
        support: 'ps',
        zone: 'na',
        status: 'up',
        rawSlug: 'North American PlayStation® megaserver',
        rawDate: '2024.08.21 - 11:50 UTC (7:50 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 11)
            .set('minutes', 50)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.21 - 11:50 UTC (7:50 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
        ],
        slugs: ['server_xbox_na'],
        type: 'server',
        support: 'xbox',
        zone: 'na',
        status: 'up',
        rawSlug: 'The North American Xbox megaserver',
        rawDate: '2024.08.21 - 11:50 UTC (7:50 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 11)
            .set('minutes', 50)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
    file: '2024-08-22T13_01_14.html',
    expected: [
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.22 - 13:00 UTC (9:00 EDT) The ESO store and account system are currently unavailable while we perform maintenance.',
        ],
        slugs: ['service_store_eso'],
        type: 'service',
        support: 'store',
        zone: 'eso',
        status: 'down',
        rawSlug: 'ESO store',
        rawDate: '2024.08.22 - 13:00 UTC (9:00 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 22)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently unavailable',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.22 - 13:00 UTC (9:00 EDT) The ESO store and account system are currently unavailable while we perform maintenance.',
        ],
        slugs: ['service_system_account'],
        type: 'service',
        support: 'system',
        zone: 'account',
        status: 'down',
        rawSlug: 'account system',
        rawDate: '2024.08.22 - 13:00 UTC (9:00 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 22)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently unavailable',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.21 - 11:50 UTC (7:50 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
        ],
        slugs: ['server_ps_eu'],
        type: 'server',
        support: 'ps',
        zone: 'eu',
        status: 'up',
        rawSlug: 'The European PlayStation® megaserver',
        rawDate: '2024.08.21 - 11:50 UTC (7:50 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 11)
            .set('minutes', 50)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.21 - 11:50 UTC (7:50 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
        ],
        slugs: ['server_xbox_eu'],
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        status: 'up',
        rawSlug: 'The European Xbox megaserver',
        rawDate: '2024.08.21 - 11:50 UTC (7:50 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 11)
            .set('minutes', 50)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.21 - 11:50 UTC (7:50 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
        ],
        slugs: ['server_ps_na'],
        type: 'server',
        support: 'ps',
        zone: 'na',
        status: 'up',
        rawSlug: 'North American PlayStation® megaserver',
        rawDate: '2024.08.21 - 11:50 UTC (7:50 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 11)
            .set('minutes', 50)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.21 - 11:50 UTC (7:50 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
        ],
        slugs: ['server_xbox_na'],
        type: 'server',
        support: 'xbox',
        zone: 'na',
        status: 'up',
        rawSlug: 'The North American Xbox megaserver',
        rawDate: '2024.08.21 - 11:50 UTC (7:50 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 11)
            .set('minutes', 50)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
    ],
  },
  {
    url: ServiceAlertsUrl,
    file: '2024-08-22T14_42_10.html',
    expected: [
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.22 - 14:40 UTC (10:40 EDT) The ESO store and account system are currently available.',
        ],
        slugs: ['service_store_eso'],
        type: 'service',
        support: 'store',
        zone: 'eso',
        status: 'up',
        rawSlug: 'ESO store',
        rawDate: '2024.08.22 - 14:40 UTC (10:40 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 22)
            .set('hours', 14)
            .set('minutes', 40)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.22 - 14:40 UTC (10:40 EDT) The ESO store and account system are currently available.',
        ],
        slugs: ['service_system_account'],
        type: 'service',
        support: 'system',
        zone: 'account',
        status: 'up',
        rawSlug: 'account system',
        rawDate: '2024.08.22 - 14:40 UTC (10:40 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 22)
            .set('hours', 14)
            .set('minutes', 40)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.21 - 11:50 UTC (7:50 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
        ],
        slugs: ['server_ps_eu'],
        type: 'server',
        support: 'ps',
        zone: 'eu',
        status: 'up',
        rawSlug: 'The European PlayStation® megaserver',
        rawDate: '2024.08.21 - 11:50 UTC (7:50 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 11)
            .set('minutes', 50)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.21 - 11:50 UTC (7:50 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
        ],
        slugs: ['server_xbox_eu'],
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        status: 'up',
        rawSlug: 'The European Xbox megaserver',
        rawDate: '2024.08.21 - 11:50 UTC (7:50 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 11)
            .set('minutes', 50)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.21 - 11:50 UTC (7:50 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
        ],
        slugs: ['server_ps_na'],
        type: 'server',
        support: 'ps',
        zone: 'na',
        status: 'up',
        rawSlug: 'North American PlayStation® megaserver',
        rawDate: '2024.08.21 - 11:50 UTC (7:50 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 11)
            .set('minutes', 50)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.21 - 11:50 UTC (7:50 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
        ],
        slugs: ['server_xbox_na'],
        type: 'server',
        support: 'xbox',
        zone: 'na',
        status: 'up',
        rawSlug: 'The North American Xbox megaserver',
        rawDate: '2024.08.21 - 11:50 UTC (7:50 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 11)
            .set('minutes', 50)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
    ],
  },
  {
    url: ServiceAlertsUrl,
    file: '2024-08-27T14_02_06.html',
    expected: [
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.27 - 14:00 UTC (10:00 EDT) The PTS is currently unavailable while we perform maintenance.',
        ],
        slugs: ['server_pc_pts'],
        type: 'server',
        support: 'pc',
        zone: 'pts',
        status: 'down',
        rawSlug: 'PTS',
        rawDate: '2024.08.27 - 14:00 UTC (10:00 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 27)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently unavailable',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.22 - 14:40 UTC (10:40 EDT) The ESO store and account system are currently available.',
        ],
        slugs: ['service_store_eso'],
        type: 'service',
        support: 'store',
        zone: 'eso',
        status: 'up',
        rawSlug: 'ESO store',
        rawDate: '2024.08.22 - 14:40 UTC (10:40 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 22)
            .set('hours', 14)
            .set('minutes', 40)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.22 - 14:40 UTC (10:40 EDT) The ESO store and account system are currently available.',
        ],
        slugs: ['service_system_account'],
        type: 'service',
        support: 'system',
        zone: 'account',
        status: 'up',
        rawSlug: 'account system',
        rawDate: '2024.08.22 - 14:40 UTC (10:40 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 22)
            .set('hours', 14)
            .set('minutes', 40)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.21 - 11:50 UTC (7:50 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
        ],
        slugs: ['server_ps_eu'],
        type: 'server',
        support: 'ps',
        zone: 'eu',
        status: 'up',
        rawSlug: 'The European PlayStation® megaserver',
        rawDate: '2024.08.21 - 11:50 UTC (7:50 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 11)
            .set('minutes', 50)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.21 - 11:50 UTC (7:50 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
        ],
        slugs: ['server_xbox_eu'],
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        status: 'up',
        rawSlug: 'The European Xbox megaserver',
        rawDate: '2024.08.21 - 11:50 UTC (7:50 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 11)
            .set('minutes', 50)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.21 - 11:50 UTC (7:50 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
        ],
        slugs: ['server_ps_na'],
        type: 'server',
        support: 'ps',
        zone: 'na',
        status: 'up',
        rawSlug: 'North American PlayStation® megaserver',
        rawDate: '2024.08.21 - 11:50 UTC (7:50 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 11)
            .set('minutes', 50)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.21 - 11:50 UTC (7:50 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
        ],
        slugs: ['server_xbox_na'],
        type: 'server',
        support: 'xbox',
        zone: 'na',
        status: 'up',
        rawSlug: 'The North American Xbox megaserver',
        rawDate: '2024.08.21 - 11:50 UTC (7:50 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 11)
            .set('minutes', 50)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
    ],
  },
  {
    url: ServiceAlertsUrl,
    file: '2024-08-27T14_44_07.html',
    expected: [
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.27 - 14:40 UTC (10:40 EDT) The PTS is currently available.',
        ],
        slugs: ['server_pc_pts'],
        type: 'server',
        support: 'pc',
        zone: 'pts',
        status: 'up',
        rawSlug: 'PTS',
        rawDate: '2024.08.27 - 14:40 UTC (10:40 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 27)
            .set('hours', 14)
            .set('minutes', 40)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.22 - 14:40 UTC (10:40 EDT) The ESO store and account system are currently available.',
        ],
        slugs: ['service_store_eso'],
        type: 'service',
        support: 'store',
        zone: 'eso',
        status: 'up',
        rawSlug: 'ESO store',
        rawDate: '2024.08.22 - 14:40 UTC (10:40 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 22)
            .set('hours', 14)
            .set('minutes', 40)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.22 - 14:40 UTC (10:40 EDT) The ESO store and account system are currently available.',
        ],
        slugs: ['service_system_account'],
        type: 'service',
        support: 'system',
        zone: 'account',
        status: 'up',
        rawSlug: 'account system',
        rawDate: '2024.08.22 - 14:40 UTC (10:40 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 22)
            .set('hours', 14)
            .set('minutes', 40)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.21 - 11:50 UTC (7:50 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
        ],
        slugs: ['server_ps_eu'],
        type: 'server',
        support: 'ps',
        zone: 'eu',
        status: 'up',
        rawSlug: 'The European PlayStation® megaserver',
        rawDate: '2024.08.21 - 11:50 UTC (7:50 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 11)
            .set('minutes', 50)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.21 - 11:50 UTC (7:50 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
        ],
        slugs: ['server_xbox_eu'],
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        status: 'up',
        rawSlug: 'The European Xbox megaserver',
        rawDate: '2024.08.21 - 11:50 UTC (7:50 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 11)
            .set('minutes', 50)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.21 - 11:50 UTC (7:50 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
        ],
        slugs: ['server_ps_na'],
        type: 'server',
        support: 'ps',
        zone: 'na',
        status: 'up',
        rawSlug: 'North American PlayStation® megaserver',
        rawDate: '2024.08.21 - 11:50 UTC (7:50 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 11)
            .set('minutes', 50)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          '2024.08.21 - 11:50 UTC (7:50 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
        ],
        slugs: ['server_xbox_na'],
        type: 'server',
        support: 'xbox',
        zone: 'na',
        status: 'up',
        rawSlug: 'The North American Xbox megaserver',
        rawDate: '2024.08.21 - 11:50 UTC (7:50 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 11)
            .set('minutes', 50)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        rawStatus: 'currently available',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
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
    ],
  },
];

export default pattern;
