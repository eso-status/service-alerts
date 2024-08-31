import { RawEsoStatus, Slug } from '@eso-status/types';
import ServiceAlertsUrl from './const';
import StatusIdentifier from './identifier/status.identifier';
import DateFormatter from './formatter/date.formatter';
import SlugMatch from './identifier/slug.match';

export default class Match {
  public slug: Slug;

  constructor(
    private readonly raw: string,
    private readonly statusIdentifier: StatusIdentifier,
    private readonly dateFormatter: DateFormatter,
    private readonly slugMatch: SlugMatch,
  ) {
    this.slug = slugMatch.slug;
  }

  public getRawEsoStatus(): RawEsoStatus {
    const rawEsoStatus: RawEsoStatus = {
      sources: [ServiceAlertsUrl],
      raw: [this.raw],
      slugs: [this.slugMatch.slug],
      type: this.slugMatch.getType(),
      support: this.slugMatch.getSupport(),
      zone: this.slugMatch.getZone(),
      status: this.statusIdentifier.status,
      rawSlug: this.slugMatch.rawSlug,
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
