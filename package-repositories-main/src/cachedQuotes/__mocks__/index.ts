import { cachedQuotesRepo as original } from '../index';

export const cachedQuotesRepo: {
  [K in keyof typeof original]: jest.Mock;
} = {
  getRecentCachedQuote: jest.fn(() => Promise.resolve(null)),
  insert: jest.fn(() => Promise.resolve(null)),
  findOneQuoteAfter: jest.fn(() => Promise.resolve(null)),
};
