import {
  ServerPcEuSlug,
  ServerPcNaSlug,
  ServerPcPtsSlug,
  ServerPsEuSlug,
  ServerPsNaSlug,
  ServerXboxEuSlug,
  ServerXboxNaSlug,
  ServiceStoreEsoSlug,
  ServiceSystemAccountSlug,
  Slug,
  Support,
  Type,
  Zone,
} from '@eso-status/types';
import { RemoteServerPcEuRawSlug } from '../type/remoteServerPcEuRawSlug.type';
import { RemoteServerPsEuRawSlug } from '../type/remoteServerPsEuRawSlug.type';
import { RemoteServerXboxEuRawSlug } from '../type/remoteServerXboxEuRawSlug.type';
import { RemoteServerPcNaRawSlug } from '../type/remoteServerPcNaRawSlug.type';
import { RemoteServerPsNaRawSlug } from '../type/remoteServerPsNaRawSlug.type';
import { RemoteServerXboxNaRawSlug } from '../type/remoteServerXboxNaRawSlug.type';
import { RemoteServerPcPtsRawSlug } from '../type/remoteServerPcPtsRawSlug.type';
import { RemoteServiceStoreEsoRawSlug } from '../type/remoteServiceStoreEsoRawSlug.type';
import { RemoteServiceSystemAccountRawSlug } from '../type/remoteServiceSystemAccountRawSlug.type';
import { RemoteRawSlug } from '../type/remoteRawSlug.type';
import SlugMatch from './slug.match';

/**
 * Class for identifying the list of slugs contained in an announcement
 */
export default class SlugIdentifier {
  /**
   * List of slug information found in the announcement
   */
  public slugMatches: SlugMatch[];

  /**
   * List of slugs to check for presence in the announcement
   * @private
   */
  private readonly slugList: Slug[] = [
    ServerPcEuSlug,
    ServerPsEuSlug,
    ServerXboxEuSlug,
    ServerPcNaSlug,
    ServerPsNaSlug,
    ServerXboxNaSlug,
    ServerPcPtsSlug,
    ServiceStoreEsoSlug,
    ServiceSystemAccountSlug,
  ];

  /**
   * List of indicators proving that the announcement pertains to the slug server_pc_eu
   * @private
   */
  private readonly ServerPcEuMatchesList: RemoteServerPcEuRawSlug[] = [
    'The European megaservers',
    'The European PC/Mac megaserver',
  ];

  /**
   * List of indicators proving that the announcement pertains to the slug server_ps_eu
   * @private
   */
  private readonly ServerPsEuMatchesList: RemoteServerPsEuRawSlug[] = [
    'The European megaservers',
    'The European PlayStation® megaserver',
    'PlayStation™ Network',
  ];

  /**
   * List of indicators proving that the announcement pertains to the slug server_xbox_eu
   * @private
   */
  private readonly ServerXboxEuMatchesList: RemoteServerXboxEuRawSlug[] = [
    'The European megaservers',
    'The European Xbox megaserver',
    'North American and European Xbox megaservers',
    'Xbox Live™',
  ];

  /**
   * List of indicators proving that the announcement pertains to the slug server_pc_na
   * @private
   */
  private readonly ServerPcNaMatchesList: RemoteServerPcNaRawSlug[] = [
    'The North American megaservers',
    'North American PC/Mac megaserver',
  ];

  /**
   * List of indicators proving that the announcement pertains to the slug server_ps_na
   * @private
   */
  private readonly ServerPsNaMatchesList: RemoteServerPsNaRawSlug[] = [
    'The North American megaservers',
    'North American PlayStation® megaserver',
    'PlayStation™ Network',
  ];

  /**
   * List of indicators proving that the announcement pertains to the slug server_xbox_na
   * @private
   */
  private readonly ServerXboxNaMatchesList: RemoteServerXboxNaRawSlug[] = [
    'The North American megaservers',
    'The North American Xbox megaserver',
    'North American and European Xbox megaservers',
    'Xbox Live™',
  ];

  /**
   * List of indicators proving that the announcement pertains to the slug server_pc_pts
   * @private
   */
  private readonly ServerPcPtsMatchesList: RemoteServerPcPtsRawSlug[] = ['PTS'];

  /**
   * List of indicators proving that the announcement pertains to the slug service_store_eso
   * @private
   */
  private readonly ServiceStoreEsoMatchesList: RemoteServiceStoreEsoRawSlug[] =
    ['ESO store'];

  /**
   * List of indicators proving that the announcement pertains to the slug service_system_account
   * @private
   */
  private readonly ServiceSystemAccountMatchesList: RemoteServiceSystemAccountRawSlug[] =
    ['account system'];

  /**
   * @param raw Raw data of the announcement
   */
  constructor(private readonly raw: string) {
    this.slugMatches = [];

    this.slugList.forEach((slug: Slug): void => this.identify(slug));
  }

  /**
   * Method for retrieving the list of indicators for a slug to test
   * @param slug Slug to test
   * @private
   */
  private getMatchList(slug: Slug): RemoteRawSlug[] {
    return <RemoteRawSlug[]>this[SlugIdentifier.getMatchListName(slug)];
  }

  /**
   * Method for retrieving the name of the list of indicators for a slug to test
   * @param slug Slug to test
   * @private
   */
  private static getMatchListName(slug: Slug): string {
    return `${slug
      .split('_')
      .map(
        (item: Type | Support | Zone): string =>
          item.charAt(0).toUpperCase() + item.slice(1),
      )
      .join('')}MatchesList`;
  }

  /**
   * Method for retrieving the indicators of a slug present in the announcement
   * @param slug Slug to test
   * @private
   */
  private getMatches(slug: Slug): RemoteRawSlug[] {
    return this.getMatchList(slug).filter(
      (identifier: RemoteRawSlug): boolean => this.raw.includes(identifier),
    );
  }

  /**
   * Method for testing if the announcement contains indicators of a given slug
   * @param slug Slug to test
   * @private
   */
  private identify(slug: Slug): void {
    const matches: RemoteRawSlug[] = this.getMatches(slug);

    if (!matches.length) {
      return;
    }

    this.slugMatches.push(new SlugMatch(matches[0], slug));
  }
}
