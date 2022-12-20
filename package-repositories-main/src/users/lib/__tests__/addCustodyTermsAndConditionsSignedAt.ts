/* eslint-disable @typescript-eslint/no-explicit-any */
import { addCustodyTermsAndConditionsSignedAt } from '../addCustodyTermsAndConditionsSignedAt';
import { UserModel } from '../../model';

const mockFindOneAndUpdateVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneAndUpdateVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

const mockDate = new Date('2020-11-10');
jest.spyOn(global, 'Date').mockImplementation(() => mockDate as any);
const RealDate = Date;

describe('save Bitwala and Solaris Custody Terms and Conditions signed at date', () => {
  beforeAll(() => {
    jest
      .spyOn(UserModel, 'findOneAndUpdate')
      .mockImplementation(() => mockFindOneAndUpdateVal);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
    global.Date = RealDate;
  });

  it('should find one and update with lean and return a promise', async () => {
    const res = await addCustodyTermsAndConditionsSignedAt('userId');
    expect(UserModel.findOneAndUpdate).toBeCalledWith(
      { _id: 'userId' },
      {
        $set: {
          bitwalaCustodyTermsAndConditionsSignedAt: mockDate,
          solarisCustodyTermsAndConditionsSignedAt: mockDate,
        },
      },
      { runValidators: true }
    );
    expect(mockFindOneAndUpdateVal.lean).toBeCalled();
    expect(mockFindOneAndUpdateVal.exec).toBeCalled();
    expect(res).toBe(true);
  });
});
