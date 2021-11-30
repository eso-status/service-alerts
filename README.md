# eso-status/service-alerts
[![npm](https://img.shields.io/npm/v/@eso-status/service-alerts)](https://www.npmjs.com/package/@eso-status/service-alerts)
[![license](https://img.shields.io/npm/l/@eso-status/service-alerts)](https://github.com/eso-status/service-alerts/blob/master/LICENSE.md)
<img src="https://img.shields.io/npm/dt/@eso-status/service-alerts" alt="Downloads" />
[![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/eso-status/service-alerts)](https://lgtm.com/projects/g/eso-status/service-alerts/context:javascript)
<img src="https://img.shields.io/node/v/@eso-status/service-alerts" alt="Node version" />
[![Build Status](https://github.com/eso-status/service-alerts/workflows/CI/badge.svg)](https://github.com/eso-status/service-alerts/actions/workflows/CI.yaml)
[![Delivery Status](https://github.com/eso-status/service-alerts/workflows/CD/badge.svg)](https://github.com/eso-status/service-alerts/actions/workflows/CD.yaml)

eso-status/service-alerts is a library for getting and formatting data can founded in [https://help.elderscrollsonline.com/app/answers/detail/a_id/4320](https://help.elderscrollsonline.com/app/answers/detail/a_id/4320)

## Table of Contents
- [How to get it ?](#how-to-get-it-)
- [How to use it ?](#how-to-use-it-)
- [Returned data format](#returned-data-format-)

### How to get it ?
```shell
npm i @eso-status/service-alerts
```

### How to use it ?
- TypeScript
```typescript
import { RawEsoStatus } from '@eso-status/types';
import { ServiceAlerts } from "@eso-status/service-alerts";

ServiceAlerts.getData().then((data: RawEsoStatus[]): void => {
  
}).catch((error: Error): void => {
  
});
```
- JavaScript
```javascript
const { ServiceAlerts } = require('@eso-status/service-alerts');

ServiceAlerts.getData().then(function (data) {
  
}).catch(function (error) {
  
});
```

### Returned data format ?
```text
[
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'
    ],
    raw: [
      '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\n' +
        '<p>2021.08.25 - 12:00 UTC (8:00 EDT)</p>\n' +
        '<p>The North American Xbox megaserver is currently available.</p>\n' +
        '<p>The European Xbox megaserver is currently available.</p>\n' +
        '<p>The North American PlayStation® megaserver is currently available.</p>\n' +
        '<p>The European PlayStation® megaserver is currently available.</p>\n'
    ],
    rawDate: '2021.08.25 - 12:00 UTC (8:00 EDT)',
    rawData: 'The North American Xbox megaserver is currently available.',
    slugs: [ 'server_xbox_na' ],
    dates: [ Moment<2021-09-25T12:00:00Z> ],
    type: 'server',
    support: 'xbox',
    zone: 'na',
    status: 'up'
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'
    ],
    raw: [
      '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\n' +
        '<p>2021.08.25 - 12:00 UTC (8:00 EDT)</p>\n' +
        '<p>The North American Xbox megaserver is currently available.</p>\n' +
        '<p>The European Xbox megaserver is currently available.</p>\n' +
        '<p>The North American PlayStation® megaserver is currently available.</p>\n' +
        '<p>The European PlayStation® megaserver is currently available.</p>\n'
    ],
    rawDate: '2021.08.25 - 12:00 UTC (8:00 EDT)',
    rawData: 'The European Xbox megaserver is currently available.',
    slugs: [ 'server_xbox_eu' ],
    dates: [ Moment<2021-09-25T12:00:00Z> ],
    type: 'server',
    support: 'xbox',
    zone: 'eu',
    status: 'up'
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'
    ],
    raw: [
      '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\n' +
        '<p>2021.08.25 - 12:00 UTC (8:00 EDT)</p>\n' +
        '<p>The North American Xbox megaserver is currently available.</p>\n' +
        '<p>The European Xbox megaserver is currently available.</p>\n' +
        '<p>The North American PlayStation® megaserver is currently available.</p>\n' +
        '<p>The European PlayStation® megaserver is currently available.</p>\n'
    ],
    rawDate: '2021.08.25 - 12:00 UTC (8:00 EDT)',
    rawData: 'The North American PlayStation® megaserver is currently available.',
    slugs: [ 'server_ps_na' ],
    dates: [ Moment<2021-09-25T12:00:00Z> ],
    type: 'server',
    support: 'ps',
    zone: 'na',
    status: 'up'
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'
    ],
    raw: [
      '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\n' +
        '<p>2021.08.25 - 12:00 UTC (8:00 EDT)</p>\n' +
        '<p>The North American Xbox megaserver is currently available.</p>\n' +
        '<p>The European Xbox megaserver is currently available.</p>\n' +
        '<p>The North American PlayStation® megaserver is currently available.</p>\n' +
        '<p>The European PlayStation® megaserver is currently available.</p>\n'
    ],
    rawDate: '2021.08.25 - 12:00 UTC (8:00 EDT)',
    rawData: 'The European PlayStation® megaserver is currently available.',
    slugs: [ 'server_ps_eu' ],
    dates: [ Moment<2021-09-25T12:00:00Z> ],
    type: 'server',
    support: 'ps',
    zone: 'eu',
    status: 'up'
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'
    ],
    raw: [
      '\n' +
        '\n' +
        '<p>2021.08.24 - 9:45 UTC (5:45 EDT)</p>\n' +
        '<p>The North American PC/Mac megaserver is currently available.</p>\n' +
        '<p>The European PC/Mac megaserver is currently available.</p>\n'
    ],
    rawDate: '2021.08.24 - 9:45 UTC (5:45 EDT)',
    rawData: 'The North American PC/Mac megaserver is currently available.',
    slugs: [ 'server_pc_na' ],
    dates: [ Moment<2021-09-24T09:45:00Z> ],
    type: 'server',
    support: 'pc',
    zone: 'na',
    status: 'up'
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'
    ],
    raw: [
      '\n' +
        '\n' +
        '<p>2021.08.24 - 9:45 UTC (5:45 EDT)</p>\n' +
        '<p>The North American PC/Mac megaserver is currently available.</p>\n' +
        '<p>The European PC/Mac megaserver is currently available.</p>\n'
    ],
    rawDate: '2021.08.24 - 9:45 UTC (5:45 EDT)',
    rawData: 'The European PC/Mac megaserver is currently available.',
    slugs: [ 'server_pc_eu' ],
    dates: [ Moment<2021-09-24T09:45:00Z> ],
    type: 'server',
    support: 'pc',
    zone: 'eu',
    status: 'up'
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'
    ],
    raw: [
      '\n' +
        '\n' +
        '<p>2021.08.16 - 21:00 UTC (17:00 EDT)</p>\n' +
        '<p>The PTS is currently available.</p>\n'
    ],
    rawDate: '2021.08.16 - 21:00 UTC (17:00 EDT)',
    rawData: 'The PTS is currently available.',
    slugs: [ 'server_pc_pts' ],
    dates: [ Moment<2021-09-16T21:00:00Z> ],
    type: 'server',
    support: 'pc',
    zone: 'pts',
    status: 'up'
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'
    ],
    raw: [
      '\n' +
        '  \n' +
        '<p>2021.08.12 - 14:45 UTC (10:45 EDT)</p>\n' +
        '\n' +
        '<p>The ESO store and account system are currently available.</p>\n' +
        '\n'
    ],
    rawDate: '  2021.08.12 - 14:45 UTC (10:45 EDT)',
    rawData: 'The ESO store and account system are currently available.',
    slugs: [ 'service_store_eso' ],
    dates: [ Moment<2021-09-12T14:45:00Z> ],
    type: 'service',
    support: 'store',
    zone: 'eso',
    status: 'up'
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'
    ],
    raw: [
      '\n' +
        '  \n' +
        '<p>2021.08.12 - 14:45 UTC (10:45 EDT)</p>\n' +
        '\n' +
        '<p>The ESO store and account system are currently available.</p>\n' +
        '\n'
    ],
    rawDate: '  2021.08.12 - 14:45 UTC (10:45 EDT)',
    rawData: 'The ESO store and account system are currently available.',
    slugs: [ 'service_system_account' ],
    dates: [ Moment<2021-09-12T14:45:00Z> ],
    type: 'service',
    support: 'system',
    zone: 'account',
    status: 'up'
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'
    ],
    raw: [
      '\n' +
        '<p>2021.01.14 - 14:45 UTC (9:45 EST)</p>\n' +
        '\n' +
        '<p>The ESO Website is currently online.</p>\n' +
        '\n'
    ],
    rawDate: '2021.01.14 - 14:45 UTC (9:45 EST)',
    rawData: 'The ESO Website is currently online.',
    slugs: [ 'service_web_site' ],
    dates: [ Moment<2021-02-14T14:45:00Z> ],
    type: 'service',
    support: 'web',
    zone: 'site',
    status: 'up'
  }
]
```
