/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisChangeRequestReason } from '@bitwala-cryptobank-squad/package-schemas';
import { SolarisChangeRequestsModel } from '../../model';

import { insert } from '../insert';

const mockDoc = {
  createdAt: 'createdAt',
};

describe('Solaris accounts repo', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisChangeRequestsModel, 'create')
      .mockImplementation(() => Promise.resolve(mockDoc) as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should use create method and return the promise', async () => {
    const doc = {
      userId: 'user id',
      solarisId: 'solaris id',
      reason: SolarisChangeRequestReason.DELETE_STANDING_ORDER,
    };
    const res = await insert(doc as any);
    expect(SolarisChangeRequestsModel.create).toBeCalledWith(doc);
    expect(res).toBe(mockDoc);
  });
});
