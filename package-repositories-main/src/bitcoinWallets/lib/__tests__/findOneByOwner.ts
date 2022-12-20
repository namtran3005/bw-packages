import { BitcoinWalletModel } from '../../model';
import { findWalletByOwner } from '../findOneByOwner';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockQuery = {
  lean: mockLean,
};

describe('find wallet by owner method', () => {
  beforeAll(() => {
    jest
      .spyOn(BitcoinWalletModel, 'findOne')
      .mockImplementation(() => mockQuery as any); // eslint-disable-line @typescript-eslint/no-explicit-any
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should look up not deleted wallet by owner, slice receive addrs, use lean and return a promise', () => {
    findWalletByOwner('owner');
    expect(BitcoinWalletModel.findOne).toBeCalledWith(
      { owner: 'owner', deletedAt: { $exists: false } },
      { receiveAddresses: { $slice: 10 } }
    );
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
