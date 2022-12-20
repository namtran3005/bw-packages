import { insertWebhookLog } from '../lib/insertWebhookLog';

import { priceAlertsPollerWebhookLogsRepo } from '../index';

describe('Price alert poller webhook logs repo', () => {
  it('should export insert method', () => {
    expect(priceAlertsPollerWebhookLogsRepo.insert).toBe(insertWebhookLog);
  });
});
