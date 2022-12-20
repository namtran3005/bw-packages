export const bitcoinWalletsRepo = {
  insert: jest.fn(() => Promise.resolve(null)),
  findOneById: jest.fn(() => Promise.resolve(null)),
  findOneByOwner: jest.fn(() => Promise.resolve(null)),
  addReceiveAddress: jest.fn(() => Promise.resolve(null)),
  mergeOne: jest.fn(() => Promise.resolve(null)),
  paginate: jest.fn(() => Promise.resolve(null)),
};

export const BitcoinTransactionModel = {
  collection: {
    name: 'bitcoin-transactions',
  },
};
