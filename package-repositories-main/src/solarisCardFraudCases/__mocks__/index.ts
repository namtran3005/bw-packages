export const solarisCardFraudCasesRepo = {
  findPendingByOwner: jest.fn(() => Promise.resolve(null)),
  findOneBySolarisId: jest.fn(() => Promise.resolve(null)),
  upsert: jest.fn(() => Promise.resolve(null)),
  mergeOne: jest.fn(() => Promise.resolve(null)),
};
