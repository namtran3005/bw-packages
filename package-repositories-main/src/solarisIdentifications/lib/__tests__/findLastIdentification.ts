/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisIdentificationModel } from '../../model';

import { findLastIdentification } from '../findLastIdentification';

const mockFindOneAndUpdateVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneAndUpdateVal),
  sort: jest.fn().mockImplementation(() => mockFindOneAndUpdateVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('findLastIdentification', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisIdentificationModel, 'findOne')
      .mockImplementation(() => mockFindOneAndUpdateVal);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should find one and update with lean and return a promise', async () => {
    const res = await findLastIdentification('accountId');
    expect(SolarisIdentificationModel.findOne).toBeCalledWith({
      owner: 'accountId',
    });
    expect(mockFindOneAndUpdateVal.sort).toBeCalledWith({ createdAt: -1 });
    expect(mockFindOneAndUpdateVal.lean).toBeCalled();
    expect(mockFindOneAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
