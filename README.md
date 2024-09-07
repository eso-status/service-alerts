# eso-status/service-alerts

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=eso-status_service-alerts&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=eso-status_service-alerts)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=eso-status_service-alerts&metric=bugs)](https://sonarcloud.io/summary/new_code?id=eso-status_service-alerts)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=eso-status_service-alerts&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=eso-status_service-alerts)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=eso-status_service-alerts&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=eso-status_service-alerts)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=eso-status_service-alerts&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=eso-status_service-alerts)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=eso-status_service-alerts&metric=coverage)](https://sonarcloud.io/summary/new_code?id=eso-status_service-alerts)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=eso-status_service-alerts&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=eso-status_service-alerts)

[![npm](https://img.shields.io/npm/v/@eso-status/service-alerts)](https://www.npmjs.com/package/@eso-status/service-alerts)
[![license](https://img.shields.io/npm/l/@eso-status/service-alerts)](https://github.com/eso-status/service-alerts/blob/master/LICENSE.md)
<img src="https://img.shields.io/npm/dt/@eso-status/service-alerts" alt="Downloads" />
<img src="https://img.shields.io/node/v/@eso-status/service-alerts" alt="Node version" />

[![Build Status](https://github.com/eso-status/service-alerts/workflows/CI/badge.svg)](https://github.com/eso-status/service-alerts/actions/workflows/CI.yaml)
[![Build Status](https://github.com/eso-status/service-alerts/workflows/CD/badge.svg)](https://github.com/eso-status/service-alerts/actions/workflows/CD.yaml)

eso-status/service-alerts is a library for retrieving and formatting data, which can be found at [https://help.elderscrollsonline.com/app/answers/detail/a_id/4320](https://help.elderscrollsonline.com/app/answers/detail/a_id/4320).

## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [Return exemple](#return-exemple)

### Install
```shell
npm i @eso-status/service-alerts
```

### Usage
```javascript
import ServiceAlerts from '@eso-status/service-alerts';
import { EsoStatusRawData } from '@eso-status/types';

const esoStatusRawDataList: EsoStatusRawData[] = await ServiceAlerts.getData();
```
### Return exemple
```text
[
  {
    source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
    raw: '2024.09.04 - 14:00 UTC (10:00 EDT) The ESO store and account system are currently unavailable while we perform maintenance.',
    slug: 'service_store_eso',
    type: 'service',
    support: 'store',
    zone: 'eso',
    status: 'down',
    rawStatus: 'currently unavailable',
    rawSlug: 'ESO store',
    rawDate: '2024.09.04 - 14:00 UTC (10:00 EDT)',
    dates: [ Moment<2024-09-04T14:00:00Z> ]
  },
  {
    source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
    raw: '2024.09.04 - 14:00 UTC (10:00 EDT) The ESO store and account system are currently unavailable while we perform maintenance.',
    slug: 'service_system_account',
    type: 'service',
    support: 'system',
    zone: 'account',
    status: 'down',
    rawStatus: 'currently unavailable',
    rawSlug: 'account system',
    rawDate: '2024.09.04 - 14:00 UTC (10:00 EDT)',
    dates: [ Moment<2024-09-04T14:00:00Z> ]
  },
  {
    source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
    raw: '2024.09.04 - 10:00 UTC (6:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
    slug: 'server_ps_eu',
    type: 'server',
    support: 'ps',
    zone: 'eu',
    status: 'down',
    rawStatus: 'currently unavailable',
    rawSlug: 'The European PlayStation® megaserver',
    rawDate: '2024.09.04 - 10:00 UTC (6:00 EDT)',
    dates: [ Moment<2024-09-04T10:00:00Z> ]
  },
  {
    source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
    raw: '2024.09.04 - 10:00 UTC (6:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
    slug: 'server_xbox_eu',
    type: 'server',
    support: 'xbox',
    zone: 'eu',
    status: 'down',
    rawStatus: 'currently unavailable',
    rawSlug: 'The European Xbox megaserver',
    rawDate: '2024.09.04 - 10:00 UTC (6:00 EDT)',
    dates: [ Moment<2024-09-04T10:00:00Z> ]
  },
  {
    source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
    raw: '2024.09.04 - 10:00 UTC (6:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
    slug: 'server_ps_na',
    type: 'server',
    support: 'ps',
    zone: 'na',
    status: 'down',
    rawStatus: 'currently unavailable',
    rawSlug: 'North American PlayStation® megaserver',
    rawDate: '2024.09.04 - 10:00 UTC (6:00 EDT)',
    dates: [ Moment<2024-09-04T10:00:00Z> ]
  },
  {
    source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
    raw: '2024.09.04 - 10:00 UTC (6:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
    slug: 'server_xbox_na',
    type: 'server',
    support: 'xbox',
    zone: 'na',
    status: 'down',
    rawStatus: 'currently unavailable',
    rawSlug: 'The North American Xbox megaserver',
    rawDate: '2024.09.04 - 10:00 UTC (6:00 EDT)',
    dates: [ Moment<2024-09-04T10:00:00Z> ]
  },
  {
    source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
    raw: '2024.09.03 - 10:55 UTC (6:55 EDT) The North American PC/Mac megaserver is currently available. The European PC/Mac megaserver is currently available.',
    slug: 'server_pc_eu',
    type: 'server',
    support: 'pc',
    zone: 'eu',
    status: 'up',
    rawStatus: 'currently available',
    rawSlug: 'The European PC/Mac megaserver',
    rawDate: '2024.09.03 - 10:55 UTC (6:55 EDT)',
    dates: [ Moment<2024-09-03T10:55:00Z> ]
  },
  {
    source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
    raw: '2024.09.03 - 10:55 UTC (6:55 EDT) The North American PC/Mac megaserver is currently available. The European PC/Mac megaserver is currently available.',
    slug: 'server_pc_na',
    type: 'server',
    support: 'pc',
    zone: 'na',
    status: 'up',
    rawStatus: 'currently available',
    rawSlug: 'The North American PC/Mac megaserver',
    rawDate: '2024.09.03 - 10:55 UTC (6:55 EDT)',
    dates: [ Moment<2024-09-03T10:55:00Z> ]
  },
  {
    source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
    raw: ' 2024.08.27 - 14:40 UTC (10:40 EDT) The PTS is currently available.',
    slug: 'server_pc_pts',
    type: 'server',
    support: 'pc',
    zone: 'pts',
    status: 'up',
    rawStatus: 'currently available',
    rawSlug: 'PTS',
    rawDate: ' 2024.08.27 - 14:40 UTC (10:40 EDT)',
    dates: [ Moment<Invalid date> ]
  }
]
```
