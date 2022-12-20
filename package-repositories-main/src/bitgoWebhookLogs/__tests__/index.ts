import { insertWebhookLog } from '../lib/insertWebhookLog';

import { bitgoWebhookLogsRepo } from '../index';

describe('bitgo webhook logs repo', () => {
  it('should export insert method', () => {
    expect(bitgoWebhookLogsRepo.insert).toBe(insertWebhookLog);
  });
});
