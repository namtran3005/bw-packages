import { findWalletById } from './lib/findOneById';
import { insertWallet } from './lib/insert';
import { findWalletByOwner } from './lib/findOneByOwner';
import { addReceiveAddress } from './lib/addReceiveAddress';
import { mergeOne } from './lib/mergeOne';
import { paginate } from './lib/paginate';

export { BitcoinWalletModel } from './model';

export const bitcoinWalletsRepo = {
  insert: insertWallet,
  findOneById: findWalletById,
  findOneByOwner: findWalletByOwner,
  addReceiveAddress,
  mergeOne,
  paginate,
};
