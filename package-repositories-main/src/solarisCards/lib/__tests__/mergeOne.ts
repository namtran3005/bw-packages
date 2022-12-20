/* eslint-disable @typescript-eslint/no-explicit-any */

import { SolarisCardModel } from '../../model';
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
  status: 'ACTIVE',
};
const mockSolarisId = 'solaris_id';

describe('merge transfer method', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisCardModel, 'findOneAndUpdate')
      .mockImplementation(() => mockQuery as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should set the payload to the card doc with specified solarisId', () => {
    mergeOne(mockSolarisId, mockData as any);
    expect(SolarisCardModel.findOneAndUpdate).toBeCalledWith(
      {
        solarisId: mockSolarisId,
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
