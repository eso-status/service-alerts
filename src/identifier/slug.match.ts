import { Slug, Support, Type, Zone } from '@eso-status/types';
import { RemoteRawSlug } from '../type/remoteRawSlug.type';

/**
 * Class permettant de récupérer les informations sur un slug trouvé dans une annonce
 */
export default class SlugMatch {
  /**
   * @param rawSlug Donnée ayant permis d'identifier la présence du slug dans l'annonce
   * @param slug Slug trouvé dans l'annonce
   */
  constructor(
    public readonly rawSlug: RemoteRawSlug,
    public readonly slug: Slug,
  ) {}

  /**
   * Méthode permettant de récupérer le type du slug
   */
  public getType(): Type {
    return <Type>this.slug.split('_')[0];
  }

  /**
   * Méthode permettant de récupérer le support du slug
   */
  public getSupport(): Support {
    return <Support>this.slug.split('_')[1];
  }

  /**
   * Méthode permettant de récupérer la zone du slug
   */
  public getZone(): Zone {
    return <Zone>this.slug.split('_')[2];
  }
}
