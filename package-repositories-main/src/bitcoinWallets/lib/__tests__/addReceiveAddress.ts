/* eslint-disable @typescript-eslint/no-explicit-any */
import { BitcoinWalletModel } from '../../model';

import { addReceiveAddress } from '../addReceiveAddress';

const mockUpd: any = {
  lean: jest.fn().mockImplementation(() => mockUpd),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('add receive address method', () => {
  beforeAll(() => {
    jest.spyOn(BitcoinWalletModel, 'update').mockImplementation(() => mockUpd);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should add a receiveAddresses and return an object', async () => {
    const address = 'address';
    const walletId = '5b4604415546b13f8c97f5f1';
    const res = await addReceiveAddress(walletId, address);
    expect(BitcoinWalletModel.update).toBeCalledWith(
      { _id: walletId },
      {
        $push: {
          receiveAddresses: {
            $each: [address],
            $position: 0,
          },
        },
      }
    );
    expect(res).toEqual('EXEC');
  });
});
