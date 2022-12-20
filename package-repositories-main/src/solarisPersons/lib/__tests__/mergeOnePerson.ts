/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisPersonModel } from '../../model';
import { mergeOnePerson } from '../mergeOnePerson';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({
  exec: mockExec,
}));

const mockQuery = {
  lean: mockLean,
};

const mockedMobileNumber = {
  solarisId: 'solarisIdTest',
  owner: 'ownerTest',
};

describe('merge solaris person', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisPersonModel, 'findOneAndUpdate')
      .mockImplementation(() => mockQuery as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use findOneAndUpdate with lean and return a promise', () => {
    mergeOnePerson('solarisPersonIdTest', mockedMobileNumber as any);
    expect(SolarisPersonModel.findOneAndUpdate).toBeCalledWith(
      { solarisId: 'solarisPersonIdTest' },
      { $set: mockedMobileNumber },
      { new: true, runValidators: true }
    );
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
