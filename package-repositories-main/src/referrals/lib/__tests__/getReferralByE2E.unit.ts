/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReferralModel } from '../../model';
import { getReferralByE2E } from '../getReferralByE2E';

const mockExec = jest.fn(() => Promise.resolve(mockDoc));
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockQuery = {
  lean: mockLean,
  exec: mockExec,
};

const end_to_end = 'id';
const mockDoc = {
  createdAt: 'createdAt',
};

describe('find referral by end to end Id', () => {
  beforeAll(() => {
    jest
      .spyOn(ReferralModel, 'findOne')
      .mockImplementation(() => mockQuery as any); // eslint-disable-line @typescript-eslint/no-explicit-any
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use getReferralByE2E method and return the promise', async () => {
    const res = await getReferralByE2E(end_to_end);
    expect(ReferralModel.findOne).toBeCalledWith({ end_to_end });
    expect(res).toBe(mockDoc);
  });
});
