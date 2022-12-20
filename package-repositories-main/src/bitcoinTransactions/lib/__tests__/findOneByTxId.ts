import { findOneByTxId } from '../findOneByTxId';
import { BitcoinTransactionModel } from '../../model';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockQuery = { lean: mockLean };

describe('find bitcoin transaction by txId', () => {
  beforeAll(() => {
    jest
      .spyOn(BitcoinTransactionModel, 'findOne')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .mockImplementation(() => mockQuery as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use findOne with lean and return a promise', () => {
    findOneByTxId('txid');
    expect(BitcoinTransactionModel.findOne).toBeCalledWith({ txId: 'txid' });
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
