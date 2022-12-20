/* eslint-disable @typescript-eslint/no-explicit-any */
import { getHasSeenUpdateSODescriptionWidget } from '../getHasSeenUpdateSODescriptionWidget';

import { UserModel } from '../../model';

const mockGetHasSeenUpdateSODescriptionWidgetVal: any = {
  lean: jest
    .fn()
    .mockImplementation(() => mockGetHasSeenUpdateSODescriptionWidgetVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('getHasSeenUpdateSODescriptionWidget fn', () => {
  beforeAll(() => {
    jest
      .spyOn(UserModel, 'findOne')
      .mockImplementation(() => mockGetHasSeenUpdateSODescriptionWidgetVal);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should find one with lean and return a promise', async () => {
    const res = await getHasSeenUpdateSODescriptionWidget('userId');
    expect(UserModel.findOne).toBeCalledWith(
      { _id: 'userId', hasSeenUpdateSODescriptionWidget: true },
      { _id: 0, hasSeenUpdateSODescriptionWidget: 1 }
    );
    expect(mockGetHasSeenUpdateSODescriptionWidgetVal.lean).toBeCalled();
    expect(mockGetHasSeenUpdateSODescriptionWidgetVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
