export const sdaAddressRepo = {
  findRecentByAccountId: jest.fn(() => Promise.resolve(null)),
  findOneByAccountId: jest.fn(() => Promise.resolve(null)),
  findOneByAddress: jest.fn(() => Promise.resolve(null)),
  insert: jest.fn(() => Promise.resolve(null)),
};
