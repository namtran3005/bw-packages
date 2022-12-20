/* eslint-disable @typescript-eslint/no-explicit-any */
import { ScaChallengeModel } from '../../model';
import { findOneById } from '../findOneById';

const mockExec = jest.fn(() => Promise.resolve(mockDoc));
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockQuery = {
  lean: mockLean,
};

const id = 'id';
const mockDoc = {
  createdAt: 'createdAt',
};

describe('find scaChallenge by ID', () => {
  beforeAll(() => {
    jest
      .spyOn(ScaChallengeModel, 'findOne')
      .mockImplementation(() => mockQuery as any); // eslint-disable-line @typescript-eslint/no-explicit-any
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use findOne method and return the promise', async () => {
    const res = await findOneById(id);
    expect(ScaChallengeModel.findOne).toBeCalledWith({ _id: id });
    expect(res).toBe(mockDoc);
  });
});
