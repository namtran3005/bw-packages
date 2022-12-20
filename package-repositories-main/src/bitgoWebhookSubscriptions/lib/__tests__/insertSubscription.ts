/* eslint-disable @typescript-eslint/no-explicit-any */
import { BitgoWebhookSubscriptionModel } from '../../model';

import { insertSubscription } from '../insertSubscription';

describe('insert webhook subscription method', () => {
  beforeAll(() => {
    jest
      .spyOn(BitgoWebhookSubscriptionModel, 'create')
      .mockImplementation(x => Promise.resolve(x));
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should use model.create and return a promise', async () => {
    const sub = { foo: 'bar' };
    const res = await insertSubscription(sub as any);
    expect(BitgoWebhookSubscriptionModel.create).toBeCalledWith(sub);
    expect(res).toEqual(sub);
  });
});
