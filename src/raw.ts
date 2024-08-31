import StatusIdentifier from './identifier/status.identifier';
import DateFormatter from './formatter/date.formatter';
import SlugsIdentifier from './identifier/slugs.identifier';
import SlugIdentifier from './identifier/slug.identifier';
import Match from './match';

export default class Raw {
  public statusIdentifier: StatusIdentifier;

  public dateFormatter: DateFormatter;

  public slugsIdentifier: SlugsIdentifier;

  public matches: Match[] = [];

  constructor(private raw: string) {
    this.clean();

    this.statusIdentifier = new StatusIdentifier(this.raw);
    this.dateFormatter = new DateFormatter(this.raw);
    this.slugsIdentifier = new SlugsIdentifier(this.raw);

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
    this.matches = this.slugsIdentifier.slugIdentified.map(
      (slugIdentified: SlugIdentifier): Match => this.getMatch(slugIdentified),
    );
  }

  private getMatch(slugIdentified: SlugIdentifier): Match {
    return new Match(
      this.raw,
      this.statusIdentifier,
      this.dateFormatter,
      slugIdentified,
    );
  }
}
