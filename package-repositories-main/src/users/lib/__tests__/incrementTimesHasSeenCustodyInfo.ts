/* eslint-disable @typescript-eslint/no-explicit-any */
import { incrementTimesHasSeenCustodyInfo } from '../incrementTimesHasSeenCustodyInfo';
import { UserModel } from '../../model';

const mockFindOneAndUpdateVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneAndUpdateVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

const mockUserId = 'user_id';
let mockTimesHasSeenCustodyInfo = 1;

jest.mock('../getTimesHasSeenCustodyInfo', () => ({
  getTimesHasSeenCustodyInfo: () =>
    Promise.resolve({ timesHasSeenCustodyInfo: 1 }),
}));

describe('incrementTimesHasSeenCustodyInfo fn', () => {
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

  it('should find one and update with lean and return a promise', async () => {
    const res = await incrementTimesHasSeenCustodyInfo(mockUserId);
    expect(UserModel.findOneAndUpdate).toBeCalledWith(
      { _id: mockUserId },
      {
        $set: {
          timesHasSeenCustodyInfo: ++mockTimesHasSeenCustodyInfo,
        },
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
        setDefaultsOnInsert: true,
      }
    );
    expect(mockFindOneAndUpdateVal.lean).toBeCalled();
    expect(mockFindOneAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
