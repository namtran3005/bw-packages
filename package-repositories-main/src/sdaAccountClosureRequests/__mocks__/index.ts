import { sdaAccountClosureRequestRepo as original } from '../index';

export const sdaAccountClosureRequestRepo: {
  [K in keyof typeof original]: jest.Mock;
} = {
  findOneBySolarisId: jest.fn(() => Promise.resolve(null)),
  upsertOne: jest.fn(() => Promise.resolve(null)),
  findManyByOwner: jest.fn(() => Promise.resolve(null)),
  findPending: jest.fn(() => Promise.resolve(null)),
  findAccountsToFreeze: jest.fn(() => Promise.resolve(null)),
};

export const SdaAccountClosureRequestModel = {
  collection: {
    name: 'sda-account-closure-requests',
  },
};
