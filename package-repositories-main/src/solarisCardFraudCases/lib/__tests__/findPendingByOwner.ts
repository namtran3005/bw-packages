/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisCardFraudCaseModel } from '../../model';

import { findPendingByOwner } from '../findPendingByOwner';

const mockFindVal: any = {
  sort: jest.fn().mockImplementation(() => mockFindVal),
  lean: jest.fn().mockImplementation(() => mockFindVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};
const mockDate = new Date('2018-05-05');

describe('findPendingByOwner (find card fraud case docs by status)', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisCardFraudCaseModel, 'find')
      .mockImplementation(() => mockFindVal);
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should find sorted with lean and return a promise', async () => {
    const res = await findPendingByOwner('ownerId');
    expect(SolarisCardFraudCaseModel.find).toMatchSnapshot();
    expect(mockFindVal.sort).toBeCalledWith({ respondUntil: -1 });
    expect(mockFindVal.lean).toBeCalled();
    expect(mockFindVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
