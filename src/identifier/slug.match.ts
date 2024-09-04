import { Slug, Support, Type, Zone } from '@eso-status/types';
import { RemoteRawSlug } from '../type/remoteRawSlug.type';

/**
 * Class for retrieving information about a slug found in an announcement
 */
export default class SlugMatch {
  /**
   * @param rawSlug Data used to identify the presence of the slug in the announcement
   * @param slug Slug found in the announcement
   */
  constructor(
    public readonly rawSlug: RemoteRawSlug,
    public readonly slug: Slug,
  ) {}

  /**
   * Method for retrieving the type of the slug
   */
  public getType(): Type {
    return <Type>this.slug.split('_')[0];
  }

  /**
   * Method for retrieving the support of the slug
   */
  public getSupport(): Support {
    return <Support>this.slug.split('_')[1];
  }

  /**
   * Method for retrieving the area of the slug
   */
  public getZone(): Zone {
    return <Zone>this.slug.split('_')[2];
  }
}
