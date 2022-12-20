/* eslint-disable @typescript-eslint/no-explicit-any */
import { StandingOrderStatus } from '@bitwala-cryptobank-squad/package-solaris';
import { StandingOrdersModel } from '../../model';

import { findStandingOrdersForUpcomingSection } from '../findStandingOrdersForUpcomingSection';

const mockDoc = {
  owner: 'owner',
  createdAt: 'createdAt',
};

const mockExec = jest.fn().mockImplementation(() => Promise.resolve([mockDoc]));
const mockLean = jest.fn().mockImplementation(() => ({
  exec: mockExec,
}));

const mockQuery = {
  lean: mockLean,
};

describe('findStandingOrdersForUpcomingSection', () => {
  beforeAll(() => {
    jest
      .spyOn(StandingOrdersModel, 'find')
      .mockImplementation(() => mockQuery as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use find method and return the promise', async () => {
    const res = await findStandingOrdersForUpcomingSection(mockDoc.owner);
    expect(StandingOrdersModel.find).toBeCalledWith(
      {
        owner: mockDoc.owner,
        status: { $ne: StandingOrderStatus.CANCELED },
      },
      null,
      { $sort: { createdAt: -1 } }
    );
    expect(mockLean).toBeCalledWith();
    expect(mockExec).toBeCalledWith();
    expect(res).toEqual([mockDoc]);
  });
});
