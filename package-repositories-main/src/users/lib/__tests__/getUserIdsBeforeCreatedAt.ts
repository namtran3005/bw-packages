/* eslint-disable @typescript-eslint/no-explicit-any */
import { getUserIdsBeforeCreatedAt } from '../getUserIdsBeforeCreatedAt';

import { UserModel } from '../../model';

const mockFindVal: any = {
  distinct: jest.fn().mockImplementation(() => mockFindVal),
  lean: jest.fn().mockImplementation(() => mockFindVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('getUserById fn', () => {
  beforeAll(() => {
    jest.spyOn(UserModel, 'find').mockImplementation(() => mockFindVal);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should find userIds before created at date with lean and return a promise', async () => {
    const res = await getUserIdsBeforeCreatedAt({
      date: new Date('2021-11-11'),
    });
    expect(UserModel.find).toBeCalledWith({
      createdAt: {
        $lt: new Date('2021-11-11'),
      },
      isVerified: true,
      solarisPersonSolarisId: { $exists: true, $ne: '' },
    });
    expect(mockFindVal.distinct).toHaveBeenNthCalledWith(1, '_id');
    expect(mockFindVal.lean).toBeCalled();
    expect(mockFindVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
