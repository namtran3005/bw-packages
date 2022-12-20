import { SolarisMobileNumberModel } from '../../model';
import { mergeOneMobileNumber } from '../mergeOneMobileNumber';

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
  number: '+123456789',
  verified: true,
};

describe('merge solaris mobile number', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisMobileNumberModel, 'findOneAndUpdate')
      .mockImplementation(() => mockQuery as any); // eslint-disable-line @typescript-eslint/no-explicit-any
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use findOneAndUpdate with lean and return a promise', () => {
    mergeOneMobileNumber('solarisMobileNumberIdTest', mockedMobileNumber);
    expect(SolarisMobileNumberModel.findOneAndUpdate).toBeCalledWith(
      { solarisId: 'solarisMobileNumberIdTest' },
      { $set: mockedMobileNumber },
      { runValidators: true }
    );
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
