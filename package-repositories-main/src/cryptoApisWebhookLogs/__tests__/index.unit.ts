import { insert } from '../lib/insert';

import { cryptoApisWebhookLogsRepo } from '../index';

describe('cryptoApisWebhookLogsRepo', () => {
  it('should export methods', () => {
    expect(cryptoApisWebhookLogsRepo.insert).toBe(insert);
  });
});
