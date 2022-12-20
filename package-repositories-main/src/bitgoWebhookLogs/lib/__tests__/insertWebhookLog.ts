/* eslint-disable @typescript-eslint/no-explicit-any */
import { BitgoWebhookLogModel } from '../../model';

import { insertWebhookLog } from '../insertWebhookLog';

describe('insert webhook log method', () => {
  beforeAll(() => {
    jest
      .spyOn(BitgoWebhookLogModel, 'create')
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
    expect(BitgoWebhookLogModel.create).toBeCalledWith(payload);
    expect(res).toEqual(payload);
  });
});
