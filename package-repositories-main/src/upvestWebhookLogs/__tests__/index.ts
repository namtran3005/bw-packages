import { insertWebhookLog } from '../lib/insertWebhookLog';

import { upvestWebhookLogsRepo } from '../index';

describe('upvest webhook logs repo', () => {
  it('should export insert method', () => {
    expect(upvestWebhookLogsRepo.insert).toBe(insertWebhookLog);
  });
});
