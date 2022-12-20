/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  TransactionAreas,
  TransactionStatus,
} from '@bitwala-cryptobank-squad/package-schemas';
import { TransactionModel } from '../../model';
import { findByAreaAndStatus } from '../findByAreaAndStatus';

const mockCursor = jest.fn().mockImplementation(() => Promise.resolve(null));

const mockBatchSize = jest.fn().mockImplementation(() => ({
  cursor: mockCursor,
}));

const mockLean = jest.fn().mockImplementation(() => ({
  batchSize: mockBatchSize,
}));

const mockFind = {
  lean: mockLean,
};

describe('findByAreaAndStatus fn', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should call find', async () => {
    jest
      .spyOn(TransactionModel, 'find')
      .mockImplementationOnce(() => mockFind as any);

    await findByAreaAndStatus(
      [TransactionAreas.SDA_TRANSACTION, TransactionAreas.CRYPTO_TRANSACTION],
      [TransactionStatus.PENDING],
      50
    );

    expect(TransactionModel.find).toBeCalledWith({
      area: {
        $in: [
          TransactionAreas.SDA_TRANSACTION,
          TransactionAreas.CRYPTO_TRANSACTION,
        ],
      },
      status: {
        $in: [TransactionStatus.PENDING],
      },
    });
    expect(mockLean).toBeCalled();
    expect(mockBatchSize).toBeCalledWith(50);
    expect(mockCursor).toBeCalled();
  });
});
