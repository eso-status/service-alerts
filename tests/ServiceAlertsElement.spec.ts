import { Moment } from 'moment';
import {
  Support,
  Status,
  Slug,
  Zone,
  Type,
} from '@eso-status/types';
import ServiceAlertsElement from '../src/classes/ServiceAlertsElement';
import { serviceAlertsPattern, slugPattern } from './pattern';

serviceAlertsPattern.forEach((pattern: {rawDate: string, rawData: string, result: {date: Moment, slug: Slug[], status: Status}}): void => {
  test(`getSlug(${pattern.rawData})`, (): void => {
    expect(ServiceAlertsElement.getSlug(pattern.rawData)).toEqual(pattern.result.slug);
  });
  test(`getDate(${pattern.rawDate})`, (): void => {
    expect(ServiceAlertsElement.getDate(pattern.rawDate)).toEqual(pattern.result.date);
  });
  test(`getStatus(${pattern.rawData})`, (): void => {
    expect(ServiceAlertsElement.getStatus(pattern.rawData)).toEqual(pattern.result.status);
  });
});

slugPattern.forEach((pattern: {slug: Slug, result: {type: Type, support: Support, zone: Zone}}): void => {
  test(`getType(${pattern.slug})`, (): void => {
    expect(ServiceAlertsElement.getType(pattern.slug)).toEqual(pattern.result.type);
  });
  test(`getSupport(${pattern.slug})`, (): void => {
    expect(ServiceAlertsElement.getSupport(pattern.slug)).toEqual(pattern.result.support);
  });
  test(`getZone(${pattern.slug})`, (): void => {
    expect(ServiceAlertsElement.getZone(pattern.slug)).toEqual(pattern.result.zone);
  });
});
