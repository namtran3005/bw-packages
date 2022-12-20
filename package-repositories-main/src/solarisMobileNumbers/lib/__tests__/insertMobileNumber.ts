import { SolarisMobileNumberModel } from '../../model';
import { insertMobileNumber } from '../insertMobileNumber';

const mockedMobileNumber = {
  solarisId: 'solarisIdTest',
  owner: 'ownerTest',
  number: '+123456789',
  verified: true,
};

describe('insert solaris mobile number method', () => {
  beforeAll(() => {
    jest.spyOn(SolarisMobileNumberModel, 'create').mockImplementation(x => x);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use mode.create to insert a doc', () => {
    const res = insertMobileNumber(mockedMobileNumber);
    expect(SolarisMobileNumberModel.create).toBeCalledWith(mockedMobileNumber);
    expect(res).toBe(mockedMobileNumber);
  });
});
