/* eslint-disable @typescript-eslint/no-explicit-any */
import { setAnonymousId } from '../setAnonymousId';

import { UserModel } from '../../model';

const mockFindOneAndUpdateVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneAndUpdateVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('setAnonymousId fn', () => {
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

  it('should find one and update anonymousId with lean and return a promise', async () => {
    const res = await setAnonymousId('userId', 'xyz123');
    expect(UserModel.findOneAndUpdate).toBeCalledWith(
      { _id: 'userId' },
      { $set: { anonymousId: 'xyz123' } },
      { runValidators: true }
    );
    expect(mockFindOneAndUpdateVal.lean).toBeCalled();
    expect(mockFindOneAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
