/* eslint-disable @typescript-eslint/no-explicit-any */

import { EthereumTransactionModel } from '../../model';
import { mergeOne } from '../mergeOne';

const mockLean = jest.fn();
const mockExec = jest.fn();

const mockQuery = {
  lean: mockLean.mockReturnValue({
    lean: mockLean,
    exec: mockExec,
  }),
};

const mockData = {
  txId: 'txId',
};
const mockId = 'mock_id';
const mockOwner = 'mock_id';

describe('merge transfer method', () => {
  beforeAll(() => {
    jest
      .spyOn(EthereumTransactionModel, 'findOneAndUpdate')
      .mockImplementation(() => mockQuery as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should set the payload to the ethereum transaction doc with specified txId', () => {
    mergeOne({ txId: mockId, owner: mockOwner }, mockData as any);
    expect(EthereumTransactionModel.findOneAndUpdate).toBeCalledWith(
      {
        txId: mockId,
        owner: mockOwner,
      },
      {
        $set: mockData,
      },
      { runValidators: true, new: true }
    );
    expect(mockLean).toBeCalledWith();
    expect(mockExec).toBeCalledWith();
  });
});
