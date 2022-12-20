import { insertWallet } from '../lib/insert';
import { findWalletById } from '../lib/findOneById';
import { findWalletByOwner } from '../lib/findOneByOwner';
import { addReceiveAddress } from '../lib/addReceiveAddress';

import { bitcoinWalletsRepo } from '../index';

describe('bitcoin wallets repo', () => {
  it('should export insert method', () => {
    expect(bitcoinWalletsRepo.insert).toBe(insertWallet);
  });
  it('should export find by id method', () => {
    expect(bitcoinWalletsRepo.findOneById).toBe(findWalletById);
  });
  it('should export find by owner method - 1', () => {
    expect(bitcoinWalletsRepo.findOneByOwner).toBe(findWalletByOwner);
  });
  it('should export find by owner method - 2', () => {
    expect(bitcoinWalletsRepo.addReceiveAddress).toBe(addReceiveAddress);
  });
});
