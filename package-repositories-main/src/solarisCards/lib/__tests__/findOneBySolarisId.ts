/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisCardModel } from '../../model';

import { findOneBySolarisId } from '../findOneBySolarisId';

const mockFindOneVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('findOneBySolarisId (find a card by solaris id)', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisCardModel, 'findOne')
      .mockImplementation(() => mockFindOneVal);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should find one with lean and return a promise', async () => {
    const res = await findOneBySolarisId('solarisId');
    expect(SolarisCardModel.findOne).toBeCalledWith({
      solarisId: 'solarisId',
    });
    expect(mockFindOneVal.lean).toBeCalled();
    expect(mockFindOneVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
