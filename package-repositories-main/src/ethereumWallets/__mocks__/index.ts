export const ethereumWalletsRepo = {
  insert: jest.fn(() => Promise.resolve(null)),
  findOneById: jest.fn(() => Promise.resolve(null)),
  findOneByOwner: jest.fn(() => Promise.resolve(null)),
  findOneByAddress: jest.fn(() => Promise.resolve(null)),
  mergeOneById: jest.fn(() => Promise.resolve(null)),
  getAllWallets: jest.fn(() => Promise.resolve(null)),
};
