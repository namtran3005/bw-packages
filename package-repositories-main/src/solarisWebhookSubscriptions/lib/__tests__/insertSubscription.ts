/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisWebhookSubscriptionModel } from '../../model';

import { insertSubscription } from '../insertSubscription';

const mockDoc = {
  solarisId: 'solarisId',
};

describe('insert subscription method', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisWebhookSubscriptionModel, 'create')
      .mockImplementation(x => x);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should use model.create to insert a doc', () => {
    insertSubscription(mockDoc as any);
    expect(SolarisWebhookSubscriptionModel.create).toBeCalledWith(mockDoc);
  });
});
