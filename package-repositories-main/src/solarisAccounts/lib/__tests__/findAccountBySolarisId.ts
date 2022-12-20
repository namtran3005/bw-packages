/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisAccountModel } from '../../model';

import { findAccountBySolarisId } from '../findAccountBySolarisId';

const mockFindOneVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('findAccountBySolarisId', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisAccountModel, 'findOne')
      .mockImplementation(() => mockFindOneVal);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should find one with lean and return a promise', async () => {
    const res = await findAccountBySolarisId('solarisId');
    expect(SolarisAccountModel.findOne).toBeCalledWith({
      solarisId: 'solarisId',
    });
    expect(mockFindOneVal.lean).toBeCalled();
    expect(mockFindOneVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
