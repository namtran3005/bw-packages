import { findWalletById } from './lib/findWalletById';
import { findWalletByOwner } from './lib/findWalletByOwner';
import { findOneByAddress } from './lib/findOneByAddress';
import { insertWallet } from './lib/insert';
import { mergeOneById } from './lib/mergeOneById';
import { getAllWallets } from './lib/getAllWallets';
import { findManyById } from './lib/findManyById';

export { EthereumWalletModel } from './model';

export const ethereumWalletsRepo = {
  insert: insertWallet,
  findOneById: findWalletById,
  findOneByOwner: findWalletByOwner,
  findOneByAddress,
  mergeOneById,
  getAllWallets,
  findManyById,
};
