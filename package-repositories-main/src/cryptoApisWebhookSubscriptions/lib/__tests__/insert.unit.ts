/* eslint-disable @typescript-eslint/no-explicit-any */
import { CryptoApisWebhookSubscriptionModel } from '../../model';

import { insert } from '../insert';

describe('insert', () => {
  beforeAll(() => {
    jest
      .spyOn(CryptoApisWebhookSubscriptionModel, 'create')
      .mockImplementation((x) => Promise.resolve(x));
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should call create', async () => {
    const SUBSCRIPTION = {
      referenceId: '123',
      owner: '123',
      walletId: '123',
      isActive: true,
      callbackUrl: '',
      createdTimestamp: new Date(0),
    };

    const res = await insert(SUBSCRIPTION);
    expect(CryptoApisWebhookSubscriptionModel.create).toBeCalledWith(
      SUBSCRIPTION
    );
    expect(res).toEqual(SUBSCRIPTION);
  });
});
