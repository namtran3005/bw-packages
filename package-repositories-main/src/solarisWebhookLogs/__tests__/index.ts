import { insertWebhookLog } from '../lib/insertWebhookLog';

import { solarisWebhookLogRepo } from '../index';

describe('solaris webhook logs repo', () => {
  it('should export insert method', () => {
    expect(solarisWebhookLogRepo.insert).toBe(insertWebhookLog);
  });
});
