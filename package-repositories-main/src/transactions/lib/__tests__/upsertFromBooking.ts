/* eslint-disable @typescript-eslint/no-explicit-any */
import { TransactionModel } from '../../model';
import * as utils from '../../../utils';

import { upsert } from '../upsert';

const mockExec = jest.fn();
const mockLean = jest.fn();
const mockId = 'randomId';

const mockQuery = {
  lean: mockLean.mockReturnValue({
    lean: mockLean,
    exec: mockExec,
  }),
};

const mockBooking = {
  reference: 'foo',
};

const mockSelector = {
  itemId: 'bar',
};

describe('upsert method', () => {
  beforeAll(() => {
    jest
      .spyOn(TransactionModel, 'findOneAndUpdate')
      .mockImplementation(() => mockQuery as any);
    jest.spyOn(utils, 'generateObjectId').mockImplementation(() => mockId);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should findOneAndUpdate with selector if provided', () => {
    upsert(mockBooking as any, mockSelector);
    expect(TransactionModel.findOneAndUpdate).toBeCalledWith(
      mockSelector,
      {
        $set: mockBooking,
      },
      {
        new: true,
        runValidators: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    );
    expect(mockLean).toBeCalledWith({ getters: true });
    expect(mockExec).toBeCalledWith();
  });

  it('should findOneAndUpdate inserting new doc if no selector provided', () => {
    upsert(mockBooking as any);
    expect(TransactionModel.findOneAndUpdate).toBeCalledWith(
      { _id: 'randomId' },
      {
        $set: mockBooking,
      },
      {
        new: true,
        runValidators: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    );
    expect(mockLean).toBeCalledWith({ getters: true });
    expect(mockExec).toBeCalledWith();
  });
});
