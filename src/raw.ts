import { RawEsoStatus } from '@eso-status/types';
import StatusIdentifier from './identifier/status.identifier';
import DateFormatter from './formatter/date.formatter';
import SlugIdentifier from './identifier/slug.identifier';
import SlugMatch from './identifier/slug.match';
import ServiceAlertsUrl from './const';

export default class Raw {
  public statusIdentifier: StatusIdentifier;

  public dateFormatter: DateFormatter;

  public slugsIdentifier: SlugIdentifier;

  public matches: RawEsoStatus[] = [];

  constructor(private raw: string) {
    this.clean();

    this.statusIdentifier = new StatusIdentifier(this.raw);
    this.dateFormatter = new DateFormatter(this.raw);
    this.slugsIdentifier = new SlugIdentifier(this.raw);

    this.split();
  }

  private clean(): void {
    this.raw = this.raw
      .replaceAll(/\n/g, '')
      .replaceAll(' </p><p>', ' ')
      .replaceAll('</p><p>', ' ')
      .replaceAll('  <p>', '')
      .replaceAll(' </p>', '')
      .replaceAll(' <p>', '')
      .replaceAll('<p>', '')
      .replaceAll('</p>', '')
      .replaceAll('&nbsp;', '')
      .replaceAll('<div>', '');
  }

  private split(): void {
    this.matches = this.slugsIdentifier.slugMatches.map(
      (slugMatch: SlugMatch): RawEsoStatus => this.getRawEsoStatus(slugMatch),
    );
  }

  public getRawEsoStatus(slugMatch: SlugMatch): RawEsoStatus {
    const rawEsoStatus: RawEsoStatus = {
      sources: [ServiceAlertsUrl],
      raw: [this.raw],
      slugs: [slugMatch.slug],
      type: slugMatch.getType(),
      support: slugMatch.getSupport(),
      zone: slugMatch.getZone(),
      status: this.statusIdentifier.status,
      rawSlug: slugMatch.rawSlug,
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
