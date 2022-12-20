import { insertTransaction } from '../lib/insertTransaction';
import { getDescription } from '../lib/getDescription';
import { getTransaction } from '../lib/getTransaction';
import { findOneByItemId } from '../lib/findOneByItemId';
import { upsert } from '../lib/upsert';
import { getTransactions } from '../lib/getTransactions';
import { getTransactionsCount } from '../lib/getTransactionsCount';

import { transactionsRepo } from '../index';

describe('Transactions repository', () => {
  it('should export insert method', () => {
    expect(transactionsRepo.insert).toBe(insertTransaction);
  });
  it('should export get method', () => {
    expect(transactionsRepo.getTransaction).toBe(getTransaction);
  });
  it('should export get description method', () => {
    expect(transactionsRepo.getDescription).toBe(getDescription);
  });
  it('should export find by item id method', () => {
    expect(transactionsRepo.findOneByItemId).toBe(findOneByItemId);
  });
  it('should export upsert from booking method', () => {
    expect(transactionsRepo.upsert).toBe(upsert);
  });
  it('should export get transactions method', () => {
    expect(transactionsRepo.getTransactions).toBe(getTransactions);
  });
  it('should export get txn count method', () => {
    expect(transactionsRepo.getTransactionsCount).toBe(getTransactionsCount);
  });
});
