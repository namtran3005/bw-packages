/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisLegitimationsModel } from '../../model';

import { findLastLegitimation } from '../findLastLegitimation';

const mockFindOneAndUpdateVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneAndUpdateVal),
  sort: jest.fn().mockImplementation(() => mockFindOneAndUpdateVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('findLastLegitimation', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisLegitimationsModel, 'findOne')
      .mockImplementation(() => mockFindOneAndUpdateVal);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should find one and update with lean and return a promise', async () => {
    const res = await findLastLegitimation('userId');
    expect(SolarisLegitimationsModel.findOne).toBeCalledWith({
      owner: 'userId',
    });
    expect(mockFindOneAndUpdateVal.sort).toBeCalledWith({
      legitimationValidUntil: -1,
    });
    expect(mockFindOneAndUpdateVal.lean).toBeCalled();
    expect(mockFindOneAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
