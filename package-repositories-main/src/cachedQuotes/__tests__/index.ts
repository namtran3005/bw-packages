import { getRecentCachedQuote } from '../lib/getRecentCachedQuote';

import { cachedQuotesRepo } from '../index';

describe('Invitations repo', () => {
  it('should export the method', () => {
    expect(cachedQuotesRepo.getRecentCachedQuote).toBe(getRecentCachedQuote);
  });
});
