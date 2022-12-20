import { aggregate } from '../lib/aggregate';
import { upsert } from '../lib/upsert';
import { insert } from '../lib/insert';
import { cryptoHistoricalPricesRepo } from '../index';

describe('cryptoHistoricalPricesRepo', () => {
  it('should export the upsert handler', () => {
    expect(cryptoHistoricalPricesRepo.upsert).toBe(upsert);
  });
  it('should export the aggregate handler', () => {
    expect(cryptoHistoricalPricesRepo.aggregate).toBe(aggregate);
  });
  it('should export the insert handler', () => {
    expect(cryptoHistoricalPricesRepo.insert).toBe(insert);
  });
});
