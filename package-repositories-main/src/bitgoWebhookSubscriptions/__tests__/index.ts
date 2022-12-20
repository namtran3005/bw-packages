import { insertSubscription } from '../lib/insertSubscription';

import { bitgoWebhookSubscriptionsRepo } from '../index';

describe('bitgo webhook subscriptuons repo', () => {
  it('should export insert method', () => {
    expect(bitgoWebhookSubscriptionsRepo.insert).toBe(insertSubscription);
  });
});
