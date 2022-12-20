/* eslint-disable @typescript-eslint/no-explicit-any */
import { getUserByIdLast5Digits } from '../getUserByIdLast5Digits';

import { UserModel } from '../../model';

describe('getUserByIdLast5Digits fn', () => {
  const mockExec = jest.fn();
  const mockAggregate = jest.fn(() => ({ exec: mockExec }));
  beforeAll(() => {
    jest.spyOn(UserModel, 'aggregate').mockImplementation(mockAggregate as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should find one with lean and return a promise', async () => {
    await getUserByIdLast5Digits('idLast5digits');
    expect(UserModel.aggregate).toHaveBeenCalledTimes(1);
    expect(UserModel.aggregate).toBeCalledWith([
      { $project: { _id: 1, id: { $toString: '$_id' } } },
      { $match: { id: { $regex: 'idLast5digits$' } } },
    ]);
  });
});
