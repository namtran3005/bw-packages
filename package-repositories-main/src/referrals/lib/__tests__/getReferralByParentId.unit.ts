/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReferralModel } from '../../model';
import { getReferralByParentId } from '../getReferralByParentId';

const mockExec = jest.fn(() => Promise.resolve(mockDoc));
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockQuery = {
  lean: mockLean,
  exec: mockLean
};

const parentUserId = 'id';
const mockDoc = {
  createdAt: 'createdAt',
};

describe('find referrals by parentId', () => {
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

  it('should use getReferralByParentId method and return the promise', async () => {
    const res = await getReferralByParentId(parentUserId);
    expect(ReferralModel.find).toBeCalledWith({ parentUserId });
    expect(res).toBe(mockDoc);
  });
});
