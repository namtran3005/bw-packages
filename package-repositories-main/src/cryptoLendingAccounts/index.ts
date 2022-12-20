import { updateOneByOwner } from './lib/updateOneByOwner';
import { findOneByOwner } from './lib/findOneByOwner';
import { insert } from './lib/insert';
import { getAccountsCursorByKycStatus } from './lib/getAccountsCursorByKycStatus';
import { paginate } from './lib/paginate';

export const cryptoLendingAccountsRepo = {
  findOneByOwner,
  updateOneByOwner,
  getAccountsCursorByKycStatus,
  insert,
  paginate,
};
export { CryptoLendingAccountModel } from './model';
