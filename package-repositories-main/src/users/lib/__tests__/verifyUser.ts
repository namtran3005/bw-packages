/* eslint-disable @typescript-eslint/no-explicit-any */
import { verifyUser } from '../verifyUser';

import { UserModel } from '../../model';

const mockFindOneAndUpdateVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneAndUpdateVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};
const mockDate = new Date('2019-11-15T11:17:58.135Z');

describe('verifyUser fn', () => {
  beforeAll(() => {
    jest
      .spyOn(UserModel, 'findOneAndUpdate')
      .mockImplementation(() => mockFindOneAndUpdateVal);
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should find one and update with lean and return a promise', async () => {
    const res = await verifyUser('userId');
    expect(UserModel.findOneAndUpdate).toBeCalledWith(
      { _id: 'userId' },
      {
        $set: { isVerified: true, verifiedAt: mockDate },
      },
      { runValidators: true }
    );
    expect(mockFindOneAndUpdateVal.lean).toBeCalled();
    expect(mockFindOneAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
