/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisCardModel } from '../../model';

import { findOneByOwner } from '../findOneByOwner';

const mockOwnerId = 'owner_id';

const mockFindOneVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneVal),
  sort: jest.fn().mockImplementation(() => mockFindOneVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('findOneByOwner (find a card by solaris id)', () => {
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
    const res = await findOneByOwner(mockOwnerId);
    expect(SolarisCardModel.findOne).toBeCalledWith({
      owner: mockOwnerId,
      deletedAt: {
        $exists: false,
      },
    });
    expect(mockFindOneVal.lean).toBeCalled();
    expect(mockFindOneVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
