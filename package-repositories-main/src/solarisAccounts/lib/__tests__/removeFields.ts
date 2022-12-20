/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisAccountModel } from '../../model';

import { removeFields } from '../removeFields';

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

  it('should find one and remove fields with lean and return a promise', async () => {
    const data: any = { foo: '' };
    const res = await removeFields('accountId', data);
    expect(SolarisAccountModel.findOneAndUpdate).toBeCalledWith(
      { solarisId: 'accountId' },
      { $unset: data }
    );
    expect(mockFindOneAndUpdateVal.lean).toBeCalled();
    expect(mockFindOneAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
