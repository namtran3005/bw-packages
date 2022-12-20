/* eslint-disable @typescript-eslint/no-explicit-any */
import { toggleClosureRequested } from '../toggleClosureRequested';
import { UserModel } from '../../model';

const mockFindOneAndUpdateVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneAndUpdateVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('toggleClosureRequested fn', () => {
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

  it('should find one and update setting closureRequested: true with lean and return a promise', async () => {
    const res = await toggleClosureRequested(
      'userId',
      true,
      'closureRequestReason'
    );
    expect(UserModel.findOneAndUpdate).toBeCalledWith(
      { _id: 'userId' },
      {
        $set: {
          closureRequested: true,
          closureRequestReason: 'closureRequestReason',
        },
      },
      { runValidators: true }
    );
    expect(mockFindOneAndUpdateVal.lean).toBeCalled();
    expect(mockFindOneAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });

  it('should find one and update setting closureRequested: false with lean and return a promise', async () => {
    const res = await toggleClosureRequested(
      'userId',
      false,
      'closureRequestReason'
    );
    expect(UserModel.findOneAndUpdate).toBeCalledWith(
      { _id: 'userId' },
      {
        $set: {
          closureRequested: false,
          closureRequestReason: 'closureRequestReason',
        },
      },
      { runValidators: true }
    );
    expect(mockFindOneAndUpdateVal.lean).toBeCalled();
    expect(mockFindOneAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
