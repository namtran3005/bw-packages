/* eslint-disable @typescript-eslint/no-explicit-any */
import { getUserById } from '../getUserById';

import { UserModel } from '../../model';

const mockFindOneVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('getUserById fn', () => {
  beforeAll(() => {
    jest.spyOn(UserModel, 'findOne').mockImplementation(() => mockFindOneVal);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should find one with lean and return a promise', async () => {
    const res = await getUserById('userId');
    expect(UserModel.findOne).toBeCalledWith({ _id: 'userId' });
    expect(mockFindOneVal.lean).toBeCalled();
    expect(mockFindOneVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
