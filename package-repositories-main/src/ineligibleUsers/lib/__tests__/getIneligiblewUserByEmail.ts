/* eslint-disable @typescript-eslint/no-explicit-any */
import { getIneligibleUserByEmail } from '../getIneligibleUserByEmail';

import { IneligibleUserModel } from '../../model';

const mockFindOneVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('getIneligibleUserByEmail fn', () => {
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
    const res = await getIneligibleUserByEmail('email@email.com');
    expect(IneligibleUserModel.findOne).toBeCalledWith({
      email: 'email@email.com',
    });
    expect(mockFindOneVal.lean).toBeCalled();
    expect(mockFindOneVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
