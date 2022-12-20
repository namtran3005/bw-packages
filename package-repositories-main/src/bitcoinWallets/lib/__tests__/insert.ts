/* eslint-disable @typescript-eslint/no-explicit-any */
import { BitcoinWalletModel } from '../../model';

import { insertWallet } from '../insert';

describe('insert webhook subscription method', () => {
  beforeAll(() => {
    jest
      .spyOn(BitcoinWalletModel, 'create')
      .mockImplementation(x => Promise.resolve(x));
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should use model.create and return a promise', async () => {
    const w = { foo: 'bar' };
    const res = await insertWallet(w as any);
    expect(BitcoinWalletModel.create).toBeCalledWith(w);
    expect(res).toEqual(w);
  });
});
