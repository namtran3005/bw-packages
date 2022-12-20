/* eslint-disable @typescript-eslint/no-explicit-any */
import { SdaApprovalRequestModel } from '../../model';

import { insert } from '../insert';

describe('insert sDA approval Request method', () => {
  beforeAll(() => {
    jest
      .spyOn(SdaApprovalRequestModel, 'create')
      .mockImplementation(input => Promise.resolve(input));
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should use model.create and return a promise', async () => {
    const input = { foo: 'bar' };
    const res = await insert(input as any);
    expect(SdaApprovalRequestModel.create).toBeCalledWith(input);
    expect(res).toEqual(input);
  });
});
