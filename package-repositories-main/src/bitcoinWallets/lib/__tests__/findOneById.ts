import { BitcoinWalletModel } from '../../model';
import { findWalletById } from '../findOneById';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockQuery = {
  lean: mockLean,
};

describe('find wallet by id method', () => {
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

  it('should look up not deleted wallet by id, slice receive addrs, use lean and return a promise', () => {
    findWalletById('id');
    expect(BitcoinWalletModel.findOne).toBeCalledWith(
      { _id: 'id', deletedAt: { $exists: false } },
      { receiveAddresses: { $slice: 10 } }
    );
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
