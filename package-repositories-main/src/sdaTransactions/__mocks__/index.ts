import { sdaTransactionsRepo as original } from '../index';

export const sdaTransactionsRepo: {
  [K in keyof typeof original]: jest.Mock;
} = {
  findById: jest.fn(() => Promise.resolve(null)),
  findOneBySolarisId: jest.fn(() => Promise.resolve(null)),
  insert: jest.fn(() => Promise.resolve(null)),
  update: jest.fn(() => Promise.resolve(null)),
  upsert: jest.fn(() => Promise.resolve(null)),
  findOneByOwnerAndBlockchainTxId: jest.fn(() => Promise.resolve(null)),
  findSettledTransactionByOwner: jest.fn(() => Promise.resolve(null)),
  findStuckPendingTransactions: jest.fn(() => Promise.resolve(null)),
  findWithdrawalsByOwner: jest.fn(() => Promise.resolve(null)),
  findDepositsByOwner: jest.fn(() => Promise.resolve(null)),
  findByState: jest.fn(() => Promise.resolve(null)),
};

export const SdaTransactionModel = {
  collection: {
    name: 'sda-transactions',
  },
};
