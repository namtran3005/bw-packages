/* eslint-disable @typescript-eslint/no-explicit-any */

import { BitcoinTransactionModel } from '../../model';
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
  cscore: 99,
};
const mockBitgoId = 'bitgo_id';

describe('merge transfer method', () => {
  beforeAll(() => {
    jest
      .spyOn(BitcoinTransactionModel, 'findOneAndUpdate')
      .mockImplementation(() => mockQuery as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should set the payload to the bitcoin transaction doc with specified bitgoId', () => {
    mergeOne(mockBitgoId, mockData as any);
    expect(BitcoinTransactionModel.findOneAndUpdate).toBeCalledWith(
      {
        bitgoId: mockBitgoId,
      },
      {
        $set: mockData,
      },
      { runValidators: true }
    );
    expect(mockLean).toBeCalledWith();
    expect(mockExec).toBeCalledWith();
  });
});
