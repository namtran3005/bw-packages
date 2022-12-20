export const solarisAccountsRepo = {
  canCoverAmount: jest.fn(() => Promise.resolve(null)),
  isDebitBlocked: jest.fn(() => Promise.resolve(null)),
  mergeOne: jest.fn(() => Promise.resolve(null)),
  findBySolarisId: jest.fn(() => Promise.resolve(null)),
  findByOwner: jest.fn(() => Promise.resolve(null)),
  insert: jest.fn(() => Promise.resolve(null)),
  removeFieldsBySolarisId: jest.fn(() => Promise.resolve(null)),
};
