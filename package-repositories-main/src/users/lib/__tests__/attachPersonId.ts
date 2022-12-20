/* eslint-disable @typescript-eslint/no-explicit-any */
import { attachPersonId } from '../attachPersonId';

import { UserModel } from '../../model';

const mockFindOneAndUpdateVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneAndUpdateVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('attachPersonId fn', () => {
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
    const res = await attachPersonId('userId', 'solarisPersonId');
    expect(UserModel.findOneAndUpdate).toBeCalledWith(
      { _id: 'userId' },
      { $set: { solarisPersonSolarisId: 'solarisPersonId' } },
      { runValidators: true }
    );
    expect(mockFindOneAndUpdateVal.lean).toBeCalled();
    expect(mockFindOneAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
