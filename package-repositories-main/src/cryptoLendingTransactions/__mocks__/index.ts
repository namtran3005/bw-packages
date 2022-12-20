import { cryptoLendingTransactionsRepo as original } from '../index';

export const cryptoLendingTransactionsRepo: {
  [K in keyof typeof original]: jest.Mock;
} = {
  findOneByTxIdOwner: jest.fn(() => Promise.resolve(null)),
  findOneById: jest.fn(() => Promise.resolve(null)),
  insert: jest.fn(() => Promise.resolve(null)),
  insertMany: jest.fn(() => Promise.resolve(null)),
  findLatestInterest: jest.fn(() => Promise.resolve(null)),
  getPendingWithdrawals: jest.fn(() => Promise.resolve(null)),
  findOneByWithdrawalId: jest.fn(() => Promise.resolve(null)),
  updateWithdrawal: jest.fn(() => Promise.resolve(null)),
  updateByTxIdOwner: jest.fn(() => Promise.resolve(null)),
  updateBySdaTxSolarisId: jest.fn(() => Promise.resolve(null)),
  getPendingDepositsCursor: jest.fn(() => Promise.resolve(null)),
  findByOwner: jest.fn(() => Promise.resolve(null)),
  countByOwnerAndStatus: jest.fn(() => Promise.resolve(null)),
  getSumOfPendingDeposits: jest.fn(() => Promise.resolve(null)),
  getSumOfPendingWithdrawalRequests: jest.fn(() => Promise.resolve(null)),
  findOneByWithdrawalAddress: jest.fn(() => Promise.resolve(null)),
  findLendingsByOwnerInYears: jest.fn(() => Promise.resolve(null)),
  findOneBySdaTxSolarisId: jest.fn(() => Promise.resolve(null)),
  findSDADepositsIdsForOwner: jest.fn(() => Promise.resolve(null)),
  deleteManyByIds: jest.fn(() => Promise.resolve(null)),
};

export const CryptoLendingTransactionModel = {
  collection: {
    name: 'crypto-lending-transactions',
  },
};
