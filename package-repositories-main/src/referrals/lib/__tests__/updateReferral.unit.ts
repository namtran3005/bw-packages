/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReferralModel } from '../../model';
import { updateReferral } from '../updateReferral';

const mockExec = jest.fn(() => Promise.resolve(mockDoc));
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockQuery = {
  lean: mockLean,
  exec: mockExec,
};

const end_to_end = 'id';
const completedAt = new Date();

const mockDoc = {
  end_to_end,
  completedAt,
};

describe('update referral', () => {
  beforeAll(() => {
    jest
      .spyOn(ReferralModel, 'updateOne')
      .mockImplementation(() => mockQuery as any); // eslint-disable-line @typescript-eslint/no-explicit-any
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should update the referral', async () => {
    const data = { completedAt };
    const res = await updateReferral(end_to_end, data);
    expect(ReferralModel.updateOne).toBeCalledWith(
      { end_to_end },
      {
        $set: {
          ...data,
        },
      },
      {
        upsert: true
      }
    );
    expect(res).toBe(mockDoc);
  });
});
