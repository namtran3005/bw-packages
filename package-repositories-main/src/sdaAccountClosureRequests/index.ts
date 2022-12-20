import { findOneBySolarisId } from './lib/findOneBySolarisId';
import { upsertOne } from './lib/upsertOne';
import { findManyByOwner } from './lib/findManyByOwner';
import { findPending } from './lib/findPending';
import { findAccountsToFreeze } from './lib/findAccountsToFreeze';

export { SdaAccountClosureRequestModel } from './model';

export const sdaAccountClosureRequestRepo = {
  findOneBySolarisId,
  upsertOne,
  findManyByOwner,
  findPending,
  findAccountsToFreeze,
};
