import { DownStatus, IssuesStatus, Status, UpStatus } from '@eso-status/types';
import { RemoteIssuesRawStatus } from '../type/remoteIssuesRawStatus.type';
import { RemoteDownRawStatus } from '../type/remoteDownRawStatus.type';
import { RemoteUpRawStatus } from '../type/remoteUpRawStatus.type';
import { RemoteRawStatus } from '../type/remoteRawStatus.type';

/**
 * Class for identifying the status contained in an announcement
 */
export default class StatusIdentifier {
  /**
   * Data used to identify the presence of the status in the announcement
   */
  public rawStatus: RemoteRawStatus;

  /**
   * Status found in the announcement
   */
  public status: Status;

  /**
   * List of statuses to check for presence in the announcement
   * @private
   */
  private readonly statusList: Status[] = [UpStatus, DownStatus, IssuesStatus];

  /**
   * List of indicators proving that the announcement pertains to the status up
   * @private
   */
  private readonly upMatchesList: RemoteUpRawStatus[] = [
    'currently available',
    'been resolved',
  ];

  /**
   * List of indicators proving that the announcement pertains to the status down
   * @private
   */
  private readonly downMatchesList: RemoteDownRawStatus[] = [
    'currently unavailable',
  ];

  /**
   * List of indicators proving that the announcement pertains to the status planned
   * @private
   */
  private readonly issuesMatchesList: RemoteIssuesRawStatus[] = [
    'currently investigating',
    'currently experiencing a service interruption',
  ];

  /**
   * @param raw Raw data of the announcement
   */
  constructor(private readonly raw: string) {
    this.statusList.forEach((status: Status): void => this.identify(status));
  }

  /**
   * Method for retrieving the list of indicators for a status to test
   * @param status Status to test
   * @private
   */
  private getMatchList(status: Status): RemoteRawStatus[] {
    return <RemoteRawStatus[]>this[`${status}MatchesList`];
  }

  /**
   * Method for retrieving the indicators of a status present in the announcement
   * @param status Status to test
   * @private
   */
  private getMatches(status: Status): RemoteRawStatus[] {
    return this.getMatchList(status).filter(
      (identifier: RemoteRawStatus): boolean => this.raw.includes(identifier),
    );
  }

  /**
   * Method for testing if the announcement contains indicators of a given status
   * @param status Status to test
   * @private
   */
  private identify(status: Status): void {
    const matches: RemoteRawStatus[] = this.getMatches(status);

    if (!matches.length) {
      return;
    }

    this.rawStatus = matches.shift();
    this.status = status;
  }
}
