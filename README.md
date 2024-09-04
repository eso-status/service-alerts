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
import { RawEsoStatus } from '@eso-status/types';

const rawEsoStatus: RawEsoStatus = await ServiceAlerts.getData();
```
### Return exemple
```text
[
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'
    ],
    raw: [
      '2024.08.27 - 14:40 UTC (10:40 EDT) The PTS is currently available.'
    ],
    slugs: [ 'server_pc_pts' ],
    type: 'server',
    support: 'pc',
    zone: 'pts',
    status: 'up',
    rawSlug: 'PTS',
    rawDate: '2024.08.27 - 14:40 UTC (10:40 EDT)',
    dates: [ Moment<2024-08-27T14:40:00Z> ],
    rawStatus: 'currently available'
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'
    ],
    raw: [
      '2024.08.22 - 14:40 UTC (10:40 EDT) The ESO store and account system are currently available.'
    ],
    slugs: [ 'service_store_eso' ],
    type: 'service',
    support: 'store',
    zone: 'eso',
    status: 'up',
    rawSlug: 'ESO store',
    rawDate: '2024.08.22 - 14:40 UTC (10:40 EDT)',
    dates: [ Moment<2024-08-22T14:40:00Z> ],
    rawStatus: 'currently available'
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'
    ],
    raw: [
      '2024.08.22 - 14:40 UTC (10:40 EDT) The ESO store and account system are currently available.'
    ],
    slugs: [ 'service_system_account' ],
    type: 'service',
    support: 'system',
    zone: 'account',
    status: 'up',
    rawSlug: 'account system',
    rawDate: '2024.08.22 - 14:40 UTC (10:40 EDT)',
    dates: [ Moment<2024-08-22T14:40:00Z> ],
    rawStatus: 'currently available'
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'
    ],
    raw: [
      '2024.08.21 - 11:50 UTC (7:50 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.'
    ],
    slugs: [ 'server_ps_eu' ],
    type: 'server',
    support: 'ps',
    zone: 'eu',
    status: 'up',
    rawSlug: 'The European PlayStation® megaserver',
    rawDate: '2024.08.21 - 11:50 UTC (7:50 EDT)',
    dates: [ Moment<2024-08-21T11:50:00Z> ],
    rawStatus: 'currently available'
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'
    ],
    raw: [
      '2024.08.21 - 11:50 UTC (7:50 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.'
    ],
    slugs: [ 'server_xbox_eu' ],
    type: 'server',
    support: 'xbox',
    zone: 'eu',
    status: 'up',
    rawSlug: 'The European Xbox megaserver',
    rawDate: '2024.08.21 - 11:50 UTC (7:50 EDT)',
    dates: [ Moment<2024-08-21T11:50:00Z> ],
    rawStatus: 'currently available'
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'
    ],
    raw: [
      '2024.08.21 - 11:50 UTC (7:50 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.'
    ],
    slugs: [ 'server_ps_na' ],
    type: 'server',
    support: 'ps',
    zone: 'na',
    status: 'up',
    rawSlug: 'North American PlayStation® megaserver',
    rawDate: '2024.08.21 - 11:50 UTC (7:50 EDT)',
    dates: [ Moment<2024-08-21T11:50:00Z> ],
    rawStatus: 'currently available'
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'
    ],
    raw: [
      '2024.08.21 - 11:50 UTC (7:50 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.'
    ],
    slugs: [ 'server_xbox_na' ],
    type: 'server',
    support: 'xbox',
    zone: 'na',
    status: 'up',
    rawSlug: 'The North American Xbox megaserver',
    rawDate: '2024.08.21 - 11:50 UTC (7:50 EDT)',
    dates: [ Moment<2024-08-21T11:50:00Z> ],
    rawStatus: 'currently available'
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'
    ],
    raw: [
      '2024.08.19 - 17:00 UTC (13:00 EDT) The North American PC/Mac megaserver is currently available.'
    ],
    slugs: [ 'server_pc_na' ],
    type: 'server',
    support: 'pc',
    zone: 'na',
    status: 'up',
    rawSlug: 'The North American PC/Mac megaserver',
    rawDate: '2024.08.19 - 17:00 UTC (13:00 EDT)',
    dates: [ Moment<2024-08-19T17:00:00Z> ],
    rawStatus: 'currently available'
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'
    ],
    raw: [
      '2024.08.19 - 16:00 UTC (12:00 EDT) The European PC/Mac megaserver is currently available.'
    ],
    slugs: [ 'server_pc_eu' ],
    type: 'server',
    support: 'pc',
    zone: 'eu',
    status: 'up',
    rawSlug: 'The European PC/Mac megaserver',
    rawDate: '2024.08.19 - 16:00 UTC (12:00 EDT)',
    dates: [ Moment<2024-08-19T16:00:00Z> ],
    rawStatus: 'currently available'
  }
]
```
