import { sdaAccountsRepo as original } from '../index';

export const sdaAccountsRepo: {
  [K in keyof typeof original]: jest.Mock;
} = {
  findOneBySolarisId: jest.fn(() => Promise.resolve(null)),
  findOneByOwnerAndCurrency: jest.fn(() => Promise.resolve(null)),
  insert: jest.fn(() => Promise.resolve(null)),
  updateOne: jest.fn(() => Promise.resolve(null)),
  findManyByOwner: jest.fn(() => Promise.resolve(null)),
  findByEntityId: jest.fn(() => Promise.resolve(null)),
};
