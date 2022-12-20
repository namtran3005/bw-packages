import { findOneById } from './lib/findOneById';
import { findLastIdentification } from './lib/findLastIdentification';
import { insertIdentification } from './lib/insertIdentification';
import { mergeFetchedData } from './lib/mergeFetchedData';
import { findLastSuccessfulIdentification } from './lib/findLastSuccessfulIdentification';
import { findLastAutoIdentByOwner } from './lib/findLastAutoIdentByOwner';

export { SolarisIdentificationModel } from './model';

export const solarisIdentificationsRepo = {
  insert: insertIdentification,
  findLast: findLastIdentification,
  findOneById,
  mergeFetchedData,
  findLastSuccessfulIdentification,
  findLastAutoIdentByOwner,
};
