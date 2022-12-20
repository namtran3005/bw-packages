/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReferralModel } from '../../model';
import { getReferralByChildId } from '../getReferralByChildId';

const mockExec = jest.fn(() => Promise.resolve(mockDoc));
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockQuery = {
  lean: mockLean,
  exec: mockLean,
};

const childUserId = 'id';
const mockDoc = {
  createdAt: 'createdAt',
};

describe('find referrals by childId', () => {
  beforeAll(() => {
    jest
      .spyOn(ReferralModel, 'find')
      .mockImplementation(() => mockQuery as any); // eslint-disable-line @typescript-eslint/no-explicit-any
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use getReferralByChildId method and return the promise', async () => {
    const res = await getReferralByChildId(childUserId);
    expect(ReferralModel.find).toBeCalledWith({ childUserId });
    expect(res).toBe(mockDoc);
  });
});
