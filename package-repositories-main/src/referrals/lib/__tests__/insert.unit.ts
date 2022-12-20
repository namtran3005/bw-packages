/* eslint-disable @typescript-eslint/no-explicit-any */
import { Referral } from '@bitwala-cryptobank-squad/package-schemas';
import { ReferralModel } from '../../model';

import { insert } from '../insert';

const mockInput = {
  id: '123456',
  parentUserId: '123',
  childUserId: '456',
  onboardedAt: new Date(),
  completedAt: new Date(),
  paidAt: new Date(),
  amount: 30,
};
const mockDoc = {
  createdAt: 'createdAt',
};

describe('insert Referral record', () => {
  beforeAll(() => {
    jest
      .spyOn(ReferralModel, 'create')
      .mockImplementation(() => Promise.resolve(mockDoc) as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use create method and return the promise', async () => {
    const res = await insert((mockInput as unknown) as Referral);
    expect(ReferralModel.create).toBeCalledWith(mockInput);
    expect(res).toBe(mockDoc);
  });
});
