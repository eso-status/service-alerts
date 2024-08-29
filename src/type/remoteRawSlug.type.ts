import { RemoteServerPcEuRawSlug } from './remoteServerPcEuRawSlug.type';
import { RemoteServerPcNaRawSlug } from './remoteServerPcNaRawSlug.type';
import { RemoteServerPcPtsRawSlug } from './remoteServerPcPtsRawSlug.type';
import { RemoteServerPsEuRawSlug } from './remoteServerPsEuRawSlug.type';
import { RemoteServerPsNaRawSlug } from './remoteServerPsNaRawSlug.type';
import { RemoteServerXboxEuRawSlug } from './remoteServerXboxEuRawSlug.type';
import { RemoteServerXboxNaRawSlug } from './remoteServerXboxNaRawSlug.type';
import { RemoteServiceStoreEsoRawSlug } from './remoteServiceStoreEsoRawSlug.type';
import { RemoteServiceSystemAccountRawSlug } from './remoteServiceSystemAccountRawSlug.type';

export type RemoteRawSlug =
  | RemoteServerPcEuRawSlug
  | RemoteServerPsEuRawSlug
  | RemoteServerXboxEuRawSlug
  | RemoteServerPcNaRawSlug
  | RemoteServerPsNaRawSlug
  | RemoteServerXboxNaRawSlug
  | RemoteServerPcPtsRawSlug
  | RemoteServiceStoreEsoRawSlug
  | RemoteServiceSystemAccountRawSlug;
