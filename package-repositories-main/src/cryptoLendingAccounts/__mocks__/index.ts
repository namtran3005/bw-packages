import { cryptoLendingAccountsRepo as original } from '../index';

export const cryptoLendingAccountsRepo: {
  [K in keyof typeof original]: jest.Mock;
} = {
  findOneByOwner: jest.fn(() => Promise.resolve(null)),
  updateOneByOwner: jest.fn(() => Promise.resolve(null)),
  getAccountsCursorByKycStatus: jest.fn(() => Promise.resolve(null)),
  insert: jest.fn(() => Promise.resolve(null)),
  paginate: jest.fn(() => Promise.resolve(null)),
};
