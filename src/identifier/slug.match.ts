import { Slug, Support, Type, Zone } from '@eso-status/types';
import { RemoteRawSlug } from '../type/remoteRawSlug.type';

export default class SlugMatch {
  constructor(
    public readonly rawSlug: RemoteRawSlug,
    public readonly slug: Slug,
  ) {}

  public getType(): Type {
    return <Type>this.slug.split('_')[0];
  }

  public getSupport(): Support {
    return <Support>this.slug.split('_')[1];
  }

  public getZone(): Zone {
    return <Zone>this.slug.split('_')[2];
  }
}
