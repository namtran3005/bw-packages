/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisIdentificationModel } from '../../model';

import { findLastSuccessfulIdentification } from '../findLastSuccessfulIdentification';

const mockFindAndUpdateVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindAndUpdateVal),
  sort: jest.fn().mockImplementation(() => mockFindAndUpdateVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('findLastSuccessfulIdentification', () => {
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
  it('should find one and update with lean and return a promise', async () => {
    const res = await findLastSuccessfulIdentification('userId');
    expect(SolarisIdentificationModel.findOne).toBeCalledWith({
      owner: 'userId',
      $or: [{ status: 'pending_successful' }, { status: 'successful' }],
    });
    expect(mockFindAndUpdateVal.sort).toBeCalledWith({ createdAt: -1 });
    expect(mockFindAndUpdateVal.lean).toBeCalled();
    expect(mockFindAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
