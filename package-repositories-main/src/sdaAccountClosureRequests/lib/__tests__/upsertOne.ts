/* eslint-disable @typescript-eslint/no-explicit-any */
import { SdaAccountClosureRequestModel } from '../../model';

import { upsertOne } from '../upsertOne';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockQuery = {
  lean: mockLean,
};

describe('upsert sDA Account Closure Request method', () => {
  beforeAll(() => {
    jest
      .spyOn(SdaAccountClosureRequestModel, 'findOneAndUpdate')
      .mockImplementation(() => mockQuery as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should use model.findOneAndUpdate and return a promise', async () => {
    const input = { foo: 'bar' };
    await upsertOne('solarisId', input as any);
    expect(SdaAccountClosureRequestModel.findOneAndUpdate).toBeCalledWith(
      { solarisId: 'solarisId' },
      { $set: input },
      {
        new: true,
        upsert: true,
      }
    );
  });
});
