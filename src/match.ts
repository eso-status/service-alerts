import { RawEsoStatus, Slug } from '@eso-status/types';
import SlugIdentifier from './identifier/slug.identifier';
import ServiceAlertsUrl from './const';
import StatusIdentifier from './identifier/status.identifier';
import DateFormatter from './formatter/date.formatter';

export default class Match {
  public slug: Slug;

  constructor(
    private readonly raw: string,
    private readonly statusIdentifier: StatusIdentifier,
    private readonly dateFormatter: DateFormatter,
    private readonly slugIdentified: SlugIdentifier,
  ) {
    this.slug = slugIdentified.slug;
  }

  public getRawEsoStatus(): RawEsoStatus {
    const rawEsoStatus: RawEsoStatus = {
      sources: [ServiceAlertsUrl],
      raw: [this.raw],
      slugs: [this.slugIdentified.slug],
      type: this.slugIdentified.getType(),
      support: this.slugIdentified.getSupport(),
      zone: this.slugIdentified.getZone(),
      status: this.statusIdentifier.status,
      rawSlug: this.slugIdentified.rawSlug,
    };

    if (this.dateFormatter.rawDate) {
      rawEsoStatus.rawDate = this.dateFormatter.rawDate;
      rawEsoStatus.dates = this.dateFormatter.dates;
    }
    if (this.statusIdentifier.rawStatus) {
      rawEsoStatus.rawStatus = this.statusIdentifier.rawStatus;
    }

    return rawEsoStatus;
  }
}
