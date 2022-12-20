import { canCoverAmount } from './lib/canCoverAmount';
import { isDebitBlocked } from './lib/isDebitBlocked';
import { mergeOne } from './lib/mergeOne';
import { findAccountBySolarisId } from './lib/findAccountBySolarisId';
import { insertAccount } from './lib/insertAccount';
import { findByOwner } from './lib/findByOwner';
import { removeFields } from './lib/removeFields';

export { SolarisAccountModel } from './model';

export const solarisAccountsRepo = {
  canCoverAmount,
  isDebitBlocked,
  mergeOne,
  findBySolarisId: findAccountBySolarisId,
  findByOwner,
  insert: insertAccount,
  removeFieldsBySolarisId: removeFields,
};
