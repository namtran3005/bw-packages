/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisIdentificationModel } from '../../model';

import { findLastAutoIdentByOwner } from '../findLastAutoIdentByOwner';

const mockFindAndUpdateVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindAndUpdateVal),
  sort: jest.fn().mockImplementation(() => mockFindAndUpdateVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('findLastAutoIdentByOwner', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisIdentificationModel, 'findOne')
      .mockImplementation(() => mockFindAndUpdateVal);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should find one and return a promise', async () => {
    const res = await findLastAutoIdentByOwner('userId');
    expect(SolarisIdentificationModel.findOne).toBeCalledWith({
      owner: 'userId',
      method: 'idnow_autoident',
    });
    expect(mockFindAndUpdateVal.sort).toBeCalledWith({ createdAt: -1 });
    expect(mockFindAndUpdateVal.lean).toBeCalled();
    expect(mockFindAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
