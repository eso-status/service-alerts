import { Status } from '@eso-status/types';
import { RemoteIssuesRawStatus } from '../type/remoteIssuesRawStatus.type';
import { RemoteDownRawStatus } from '../type/remoteDownRawStatus.type';
import { RemoteUpRawStatus } from '../type/remoteUpRawStatus.type';
import { RemoteRawStatus } from '../type/remoteRawStatus.type';

export default class StatusIdentifier {
  public rawStatus: string;

  public status: Status;

  private readonly statusList: Status[] = ['up', 'down', 'issues'];

  private readonly upMatchesList: RemoteUpRawStatus[] = [
    'currently available',
    'been resolved',
  ];

  private readonly downMatchesList: RemoteDownRawStatus[] = [
    'currently unavailable',
  ];

  private readonly issuesMatchesList: RemoteIssuesRawStatus[] = [
    'currently investigating issues',
    'currently experiencing a service interruption',
  ];

  constructor(private readonly raw: string) {
    this.statusList.forEach((status: Status): void => this.identify(status));
  }

  private getMatchList(status: Status): RemoteRawStatus[] {
    return <RemoteRawStatus[]>this[`${status}MatchesList`];
  }

  private getMatches(status: Status): RemoteRawStatus[] {
    return this.getMatchList(status).filter(
      (identifier: RemoteRawStatus): boolean => this.raw.includes(identifier),
    );
  }

  private identify(status: Status): void {
    const matches: RemoteRawStatus[] = this.getMatches(status);
    if (!matches.length) {
      return;
    }

    this.rawStatus = matches.shift();
    this.status = status;
  }
}
