import { insertWebhookLog } from '../lib/insertWebhookLog';

import { tradingWebhookLogRepo } from '../index';

describe('trading webhook logs repo', () => {
  it('should export insert method', () => {
    expect(tradingWebhookLogRepo.insert).toBe(insertWebhookLog);
  });
});
