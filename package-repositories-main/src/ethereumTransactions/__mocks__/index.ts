export const ethereumTransactionsRepo = {
  findOneByTxId: jest.fn(() => Promise.resolve(null)),
  findOneById: jest.fn(() => Promise.resolve(null)),
  findLatestByWalletId: jest.fn(() => Promise.resolve(null)),
  findAllByNonce: jest.fn(() => Promise.resolve(null)),
  mergeOne: jest.fn(() => Promise.resolve(null)),
  upsertByTxId: jest.fn(() => Promise.resolve(null)),
  countByStatus: jest.fn(() => Promise.resolve(null)),
  findOldestFailedNonceByWalletId: jest.fn(() => Promise.resolve(null)),
  upsert: jest.fn(() => Promise.resolve(null)),
  findPendingTxs: jest.fn(() => Promise.resolve(null)),
  findCompletedByMissingCScore: jest.fn(() => Promise.resolve(null)),
};

export const EthereumTransactionModel = {
  collection: {
    name: 'ethereum-transactions',
  },
};
