export const solarisPersonsRepo = {
  insert: jest.fn(() => Promise.resolve(null)),
  findOneBySolarisId: jest.fn(() => Promise.resolve(null)),
  findByOwner: jest.fn(() => Promise.resolve(null)),
  mergeOne: jest.fn(() => Promise.resolve(null)),
  findManyPersonsByOwner: jest.fn(() => Promise.resolve(null)),
  getETFUserData: jest.fn(() => Promise.resolve(null)),
  findOneByFirstNameAndLastName: jest.fn(() => Promise.resolve(null)),
};
