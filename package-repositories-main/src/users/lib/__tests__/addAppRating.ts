/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppRatingStatus, AppRatingPlatform } from '@bitwala-cryptobank-squad/package-schemas';
import { addAppRating } from '../addAppRating';

import { UserModel } from '../../model';

const mockFindOneAndUpdateVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneAndUpdateVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

const mockDate = new Date('2020-05-05');
const RealDate = Date;
jest.spyOn(global, 'Date').mockImplementation(() => mockDate as any);

describe('addAppRating fn', () => {
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
    global.Date = RealDate;
  });

  it('should find one and update with lean and return a promise', async () => {
    const res = await addAppRating(
      'userId',
      AppRatingStatus.RATEDNOW,
      AppRatingPlatform.ANDROID
    );
    expect(UserModel.findOneAndUpdate).toBeCalledWith(
      { _id: 'userId' },
      {
        $addToSet: {
          appRatings: {
            appRatingStatus: AppRatingStatus.RATEDNOW,
            appRatingDate: mockDate,
            appRatingPlatform: AppRatingPlatform.ANDROID,
          },
        },
      },
      { runValidators: true }
    );
    expect(mockFindOneAndUpdateVal.lean).toBeCalled();
    expect(mockFindOneAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
