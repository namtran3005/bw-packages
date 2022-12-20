/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTimesHasSeenCustodyInfo } from '../getTimesHasSeenCustodyInfo';

import { UserModel } from '../../model';

const mockGetTimesHasSeenCustodyInfoVal: any = {
  lean: jest.fn().mockImplementation(() => mockGetTimesHasSeenCustodyInfoVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('getTimesHasSeenCustodyInfo fn', () => {
  beforeAll(() => {
    jest
      .spyOn(UserModel, 'findOne')
      .mockImplementation(() => mockGetTimesHasSeenCustodyInfoVal);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should find one with lean and return a promise', async () => {
    const res = await getTimesHasSeenCustodyInfo('userId');
    expect(UserModel.findOne).toBeCalledWith(
      { _id: 'userId' },
      { _id: 0, timesHasSeenCustodyInfo: 1 }
    );
    expect(mockGetTimesHasSeenCustodyInfoVal.lean).toBeCalled();
    expect(mockGetTimesHasSeenCustodyInfoVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
