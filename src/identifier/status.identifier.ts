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
    this.statusList.forEach((status: Status): void => {
      const matchesList: RemoteRawStatus[] = <RemoteRawStatus[]>(
        this[`${status}MatchesList`]
      );

      const matches: RemoteRawStatus[] = matchesList.filter(
        (identifier: RemoteRawStatus): boolean => this.raw.includes(identifier),
      );
      if (matches.length > 0) {
        this.rawStatus = matches.shift();
        this.status = status;
      }
    });
  }
}
