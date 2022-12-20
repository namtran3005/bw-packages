/* eslint-disable @typescript-eslint/no-explicit-any */
import { PriceAlertsPollerWebhookLogsModel } from '../../model';

import { insertWebhookLog } from '../insertWebhookLog';

const mockDoc = {
  priceAlertId: 'priceAlertId',
};

describe('insert webhook log method', () => {
  beforeAll(() => {
    jest
      .spyOn(PriceAlertsPollerWebhookLogsModel, 'create')
      .mockImplementation(x => x);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should use model.create to insert a doc', () => {
    const res = insertWebhookLog(mockDoc as any);
    expect(PriceAlertsPollerWebhookLogsModel.create).toBeCalledWith(mockDoc);
    expect(res).toBe(mockDoc);
  });
});
