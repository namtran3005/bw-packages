import { transactionsRepo as original } from '../index';

export const transactionsRepo: {
  [K in keyof typeof original]: jest.Mock;
} = {
  insert: jest.fn(() => Promise.resolve(null)),
  getTransaction: jest.fn(() => Promise.resolve(null)),
  getDescription: jest.fn(() => Promise.resolve(null)),
  findOneById: jest.fn(() => Promise.resolve(null)),
  findOneByItemId: jest.fn(() => Promise.resolve(null)),
  upsert: jest.fn(() => Promise.resolve(null)),
  updateOne: jest.fn(() => Promise.resolve(null)),
  getTransactions: jest.fn(() => Promise.resolve(null)),
  getTransactionsCount: jest.fn(() => Promise.resolve(null)),
  getTransactionsYears: jest.fn(() => Promise.resolve(null)),
  getTransactionsForDownload: jest.fn(() => Promise.resolve(null)),
  getPortfolioActivityCombinedTransactions: jest.fn(() =>
    Promise.resolve(null)
  ),
  getPortfolioActivityBtcTransactions: jest.fn(() => Promise.resolve(null)),
  getPortfolioActivityEthTransactions: jest.fn(() => Promise.resolve(null)),
  getPortfolioActivityBtcLendingTransactions: jest.fn(() =>
    Promise.resolve(null)
  ),
  findOne: jest.fn(() => Promise.resolve(null)),
  deleteOneById: jest.fn(() => Promise.resolve(null)),
  getTransactionsForYear: jest.fn(() => Promise.resolve(null)),
  getTransactionCountForYear: jest.fn(() => Promise.resolve(null)),
  getCompletedTransactionsByOwner: jest.fn(() => Promise.resolve(null)),
  getPendingTransactionsByOwner: jest.fn(() => Promise.resolve(null)),
  getPortfolioActivityCustodyBtcTransactions: jest.fn(() =>
    Promise.resolve(null)
  ),
  getPortfolioActivityCustodyEthTransactions: jest.fn(() =>
    Promise.resolve(null)
  ),
  updateStateById: jest.fn(() => Promise.resolve(null)),
  deleteManyCryptoLendingTxs: jest.fn(() => Promise.resolve(null)),
  insertManyCryptoLendingDeposits: jest.fn(() => Promise.resolve(null)),
  findByAreaAndStatus: jest.fn(() => Promise.resolve(null)),
};

export const TransactionModel: {
  aggregate: () => { exec: () => Promise<any> };
} = {
  aggregate: jest.fn(() => ({
    exec: jest.fn(() => Promise.resolve(null)),
  })),
};
