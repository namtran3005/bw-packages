import { findOneBySolarisId } from './lib/findOneBySolarisId';
import { findOneByOwnerAndCurrency } from './lib/findOneByOwnerAndCurrency';
import { insert } from './lib/insert';
import { updateOne } from './lib/updateOne';
import { findManyByOwner } from './lib/findManyByOwner';
import { findByEntityId } from './lib/findByEntityId';

export { SdaAccountModel } from './model';

export const sdaAccountsRepo = {
  findOneBySolarisId,
  findOneByOwnerAndCurrency,
  insert,
  updateOne,
  findManyByOwner,
  findByEntityId,
};
