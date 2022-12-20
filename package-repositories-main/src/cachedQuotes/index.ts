import { getRecentCachedQuote } from './lib/getRecentCachedQuote';
import { insert } from './lib/insert';
import { findOneQuoteAfter } from './lib/findOneQuoteAfter';

export { CachedQuotesModel } from './model';

export const cachedQuotesRepo = {
  getRecentCachedQuote,
  insert,
  findOneQuoteAfter,
};
