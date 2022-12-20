/* eslint-disable @typescript-eslint/no-explicit-any */

import { SepaCreditTransferModel } from '../../model';
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
  reference: 'foo',
};

describe('merge transfer method', () => {
  beforeAll(() => {
    jest
      .spyOn(SepaCreditTransferModel, 'findOneAndUpdate')
      .mockImplementation(() => mockQuery as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should set the payload to the SCT foc with specified solarisId', () => {
    mergeOne('solarisId', mockData as any);
    expect(SepaCreditTransferModel.findOneAndUpdate).toBeCalledWith(
      {
        solarisId: 'solarisId',
      },
      {
        $set: mockData,
      }
    );
    expect(mockLean).toBeCalledWith();
    expect(mockExec).toBeCalledWith();
  });
});
