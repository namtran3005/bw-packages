/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllUserIdsByEvent } from '../getAllUserIdsByEvent';

import { UserModel } from '../../model';

const mockExec = jest.fn(() => Promise.resolve(null));
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockQuery = {
  lean: mockLean,
};

describe('getAllUserIdsByEvent fn', () => {
  beforeAll(() => {
    jest.spyOn(UserModel, 'find').mockImplementation(jest.fn());
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should call find', async () => {
    jest.spyOn(UserModel, 'find').mockImplementation(() => mockQuery as any);

    await getAllUserIdsByEvent('GLOBAL_BTC_PRICE_ALERT');
    expect(UserModel.find).toBeCalled();
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
