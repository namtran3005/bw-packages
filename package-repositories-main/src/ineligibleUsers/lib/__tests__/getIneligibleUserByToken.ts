/* eslint-disable @typescript-eslint/no-explicit-any */
import { getIneligibleUserByToken } from '../getIneligibleUserByToken';

import { IneligibleUserModel } from '../../model';

const mockToken = 'token';

const mockFindOneVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('getIneligibleUserByToken fn', () => {
  beforeAll(() => {
    jest
      .spyOn(IneligibleUserModel, 'findOne')
      .mockImplementation(() => mockFindOneVal);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should find one with lean and return a promise', async () => {
    await getIneligibleUserByToken(mockToken);
    expect(IneligibleUserModel.findOne).toBeCalledWith({
      emailVerified: false,
      'verificationTokens.token': mockToken,
    });
  });
});
