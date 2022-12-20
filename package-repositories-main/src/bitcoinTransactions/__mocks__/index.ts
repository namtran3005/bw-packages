export const bitcoinTransactionsRepo = {
  upsert: jest.fn(() => Promise.resolve(null)),
  findOneById: jest.fn(() => Promise.resolve(null)),
  findOneByBitgoId: jest.fn(() => Promise.resolve(null)),
  mergeOne: jest.fn(() => Promise.resolve(null)),
  findOneByTxId: jest.fn(() => Promise.resolve(null)),
  findCompletedByMissingCScore: jest.fn(() => Promise.resolve(null)),
  findManyByBitgoId: jest.fn(() => Promise.resolve(null)),
};
