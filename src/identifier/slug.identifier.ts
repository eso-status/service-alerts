import { Slug, Support, Type, Zone } from '@eso-status/types';
import { SlugIdentify } from '../interface/slugIdentify.interface';
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

export default class SlugIdentifier {
  public slugIdentified: SlugIdentify[];

  private readonly slugList: Slug[] = [
    'server_pc_eu',
    'server_ps_eu',
    'server_xbox_eu',
    'server_pc_na',
    'server_ps_na',
    'server_xbox_na',
    'server_pc_pts',
    'service_store_eso',
    'service_system_account',
  ];

  private readonly ServerPcEuMatchesList: RemoteServerPcEuRawSlug[] = [
    'The European megaservers',
    'The European PC/Mac megaserver',
  ];

  private readonly ServerPsEuMatchesList: RemoteServerPsEuRawSlug[] = [
    'The European megaservers',
    'The European PlayStation® megaserver',
  ];

  private readonly ServerXboxEuMatchesList: RemoteServerXboxEuRawSlug[] = [
    'The European megaservers',
    'The European Xbox megaserver',
    'North American and European Xbox megaservers',
    'Xbox Live™',
  ];

  private readonly ServerPcNaMatchesList: RemoteServerPcNaRawSlug[] = [
    'The North American megaservers',
    'The North American PC/Mac megaserver',
  ];

  private readonly ServerPsNaMatchesList: RemoteServerPsNaRawSlug[] = [
    'The North American megaservers',
    'North American PlayStation® megaserver',
  ];

  private readonly ServerXboxNaMatchesList: RemoteServerXboxNaRawSlug[] = [
    'The North American megaservers',
    'The North American Xbox megaserver',
    'North American and European Xbox megaservers',
    'Xbox Live™',
  ];

  private readonly ServerPcPtsMatchesList: RemoteServerPcPtsRawSlug[] = ['PTS'];

  private readonly ServiceStoreEsoMatchesList: RemoteServiceStoreEsoRawSlug[] =
    ['ESO store'];

  private readonly ServiceSystemAccountMatchesList: RemoteServiceSystemAccountRawSlug[] =
    ['account system'];

  constructor(private readonly raw: string) {
    this.slugIdentified = [];

    this.slugList.forEach((slug: Slug): void => {
      const matchesList: RemoteRawSlug[] = <RemoteRawSlug[]>this[
        `${slug
          .split('_')
          .map(
            (item: Type | Support | Zone): string =>
              item.charAt(0).toUpperCase() + item.slice(1),
          )
          .join('')}MatchesList`
      ];

      const matches: RemoteRawSlug[] = matchesList.filter(
        (identifier: RemoteRawSlug): boolean => this.raw.includes(identifier),
      );
      if (matches.length > 0) {
        this.slugIdentified.push({
          rawSlug: matches[0],
          slug,
        });
      }
    });
  }
}
