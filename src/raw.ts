import StatusIdentifier from './identifier/status.identifier';
import DateFormatter from './formatter/date.formatter';
import SlugIdentifier from './identifier/slug.identifier';
import Match from './match';
import SlugMatch from './identifier/slug.match';

export default class Raw {
  public statusIdentifier: StatusIdentifier;

  public dateFormatter: DateFormatter;

  public slugsIdentifier: SlugIdentifier;

  public matches: Match[] = [];

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
      (slugMatch: SlugMatch): Match => this.getMatch(slugMatch),
    );
  }

  private getMatch(slugMatch: SlugMatch): Match {
    return new Match(
      this.raw,
      this.statusIdentifier,
      this.dateFormatter,
      slugMatch,
    );
  }
}
