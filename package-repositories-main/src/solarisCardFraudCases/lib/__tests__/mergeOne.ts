/* eslint-disable @typescript-eslint/no-explicit-any */

import { SolarisCardFraudCaseModel } from '../../model';
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
  status: 'TIMEOUT',
};
const mockSolarisId = 'solaris_id';

describe('mergeOne (find and update a card fraud case doc by solaris id)', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisCardFraudCaseModel, 'findOneAndUpdate')
      .mockImplementation(() => mockQuery as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should set the payload to the card fraud case doc with specified solarisId', () => {
    mergeOne(mockSolarisId, mockData as any);
    expect(SolarisCardFraudCaseModel.findOneAndUpdate).toBeCalledWith(
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
