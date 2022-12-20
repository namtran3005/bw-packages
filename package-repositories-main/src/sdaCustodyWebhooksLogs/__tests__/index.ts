import { insertWebhookLog } from '../lib/insertWebhookLog';

import { sdaCustodyWebhookLogsRepo } from '../index';

describe('sdaCustody webhook logs repo', () => {
  it('should export insert method', () => {
    expect(sdaCustodyWebhookLogsRepo.insert).toBe(insertWebhookLog);
  });
});
