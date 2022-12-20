/* eslint-disable @typescript-eslint/no-explicit-any */
import { UpvestWebhookLogModel } from '../../model';

import { insertWebhookLog } from '../insertWebhookLog';

describe('insert webhook log method', () => {
  beforeAll(() => {
    jest
      .spyOn(UpvestWebhookLogModel, 'create')
      .mockImplementation(x => Promise.resolve(x));
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should use model.create and return a promise', async () => {
    const payload = { payload: 'bar' };
    const res = await insertWebhookLog(payload as any);
    expect(UpvestWebhookLogModel.create).toBeCalledWith(payload);
    expect(res).toEqual(payload);
  });
});
