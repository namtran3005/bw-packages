export const solarisIdentificationsRepo = {
  insert: jest.fn(() => Promise.resolve(null)),
  findLast: jest.fn(() => Promise.resolve(null)),
  findOneById: jest.fn(() => Promise.resolve(null)),
  mergeFetchedData: jest.fn(() => Promise.resolve(null)),
  findLastSuccessfulIdentification: jest.fn(() => Promise.resolve(null)),
  findLastAutoIdentByOwner: jest.fn(() => Promise.resolve(null)),
};
