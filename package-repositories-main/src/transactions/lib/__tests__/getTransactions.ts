/* eslint-disable @typescript-eslint/no-explicit-any */

import { getTransactions } from '../getTransactions';
import { TransactionModel } from '../../model';

describe('getTransactions', () => {
  afterAll(jest.clearAllMocks);
  it('should return the correct values', async () => {
    const exec = jest.fn(() => 'it works!');
    const lean = jest.fn(() => ({ exec }));
    const sort = jest.fn(() => ({ lean }));
    const limit = jest.fn(() => ({ sort }));
    const skip = jest.fn(() => ({ limit }));
    jest.spyOn(TransactionModel, 'find').mockReturnValue({ skip } as any);

    const txList = await getTransactions(
      { owner: 'Natoshi Sakamoto' },
      10,
      20,
      {
        transactionTime: -1,
      }
    );

    expect(txList).toBe('it works!');
  });
});
