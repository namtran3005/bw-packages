/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisAccountModel } from '../../model';

import { mergeOne } from '../mergeOne';

const mockFindOneAndUpdateVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneAndUpdateVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('mergeFetchedData', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisAccountModel, 'findOneAndUpdate')
      .mockImplementation(() => mockFindOneAndUpdateVal);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should find one and update with lean and return a promise', async () => {
    const data: any = { foo: 'bar' };
    const res = await mergeOne('accountId', data);
    expect(SolarisAccountModel.findOneAndUpdate).toBeCalledWith(
      { solarisId: 'accountId' },
      { $set: data },
      { runValidators: true, new: true }
    );
    expect(mockFindOneAndUpdateVal.lean).toBeCalled();
    expect(mockFindOneAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
