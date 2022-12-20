/* eslint-disable @typescript-eslint/no-explicit-any */
import { toggleFreeze } from '../toggleFreeze';
import { UserModel } from '../../model';

const mockFindOneAndUpdateVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneAndUpdateVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

const mockDate = new Date('2018-05-05');

describe('toggleFreeze fn', () => {
  beforeAll(() => {
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate as any);
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

  it('should find one and update setting frozen: true with lean and return a promise', async () => {
    const res = await toggleFreeze('userId', true, 'reason');
    expect(UserModel.findOneAndUpdate).toBeCalledWith(
      { _id: 'userId' },
      { $set: { frozen: true, frozenAt: mockDate, frozenReason: 'reason' } },
      { runValidators: true }
    );
    expect(mockFindOneAndUpdateVal.lean).toBeCalled();
    expect(mockFindOneAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });

  it('should find one and update setting frozen: false with lean and return a promise', async () => {
    const res = await toggleFreeze('userId', false, 'reason');
    expect(UserModel.findOneAndUpdate).toBeCalledWith(
      { _id: 'userId' },
      { $set: { frozen: false, frozenAt: mockDate, frozenReason: 'reason' } },
      { runValidators: true }
    );
    expect(mockFindOneAndUpdateVal.lean).toBeCalled();
    expect(mockFindOneAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
