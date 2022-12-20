import { insertWebhookLog } from '../lib/insertWebhookLog';

import { solarisPollingServiceWebhookLogRepo } from '../index';

describe('solaris webhook logs repo', () => {
  it('should export insert method', () => {
    expect(solarisPollingServiceWebhookLogRepo.insert).toBe(insertWebhookLog);
  });
});
