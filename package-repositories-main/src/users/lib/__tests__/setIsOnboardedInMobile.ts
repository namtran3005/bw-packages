/* eslint-disable @typescript-eslint/no-explicit-any */
import { setIsOnboardedInMobile } from '../setIsOnboardedInMobile';

import { UserModel } from '../../model';

const mockFindOneAndUpdateVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneAndUpdateVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('setIsOnboardedInMobile fn', () => {
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
  });

  it('should find one and update isOnboardedInMobile with lean and return a promise', async () => {
    const res = await setIsOnboardedInMobile('userId', true);
    expect(UserModel.findOneAndUpdate).toBeCalledWith(
      { _id: 'userId' },
      { $set: { isOnboardedInMobile: true } },
      { runValidators: true }
    );
    expect(mockFindOneAndUpdateVal.lean).toBeCalled();
    expect(mockFindOneAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
