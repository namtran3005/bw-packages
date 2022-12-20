/* eslint-disable @typescript-eslint/no-explicit-any */
import { getUserByVerifiedEmail } from '../getUserByVerifiedEmail';

import { UserModel } from '../../model';

const mockFindOneVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

const mockEmail = 'email@example.com';

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

  it('should find one by email with lean and return a promise', async () => {
    const res = await getUserByVerifiedEmail(mockEmail);
    expect(UserModel.findOne).toBeCalledWith({
      emails: {
        $elemMatch: {
          address: mockEmail,
          verified: true,
        },
      },
    });
    expect(mockFindOneVal.lean).toBeCalled();
    expect(mockFindOneVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
