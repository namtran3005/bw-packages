/* eslint-disable @typescript-eslint/no-explicit-any */

import { getTransactionsCount } from '../getTransactionsCount';
import { TransactionModel } from '../../model';

describe('getTransactionsCount', () => {
  afterAll(jest.restoreAllMocks);
  it('should return the correct values', async () => {
    const exec = jest.fn(() => 'it works!');
    jest
      .spyOn(TransactionModel, 'countDocuments')
      .mockReturnValue({ exec } as any);

    const txList = await getTransactionsCount({ owner: 'Natoshi Sakamoto' });

    expect(txList).toBe('it works!');
  });
});
