import { insertSubscription } from '../lib/insertSubscription';
import { findAll } from '../lib/findAll';
import { findOneByEvent } from '../lib/findOneByEvent';

import { solarisWebhookSubscriptionsRepo } from '../index';

describe('solaris webhook subscriptions repo', () => {
  it('should export insert method', () => {
    expect(solarisWebhookSubscriptionsRepo.insert).toBe(insertSubscription);
  });
  it('should export find method', () => {
    expect(solarisWebhookSubscriptionsRepo.find).toBe(findAll);
  });
  it('should export find by event method', () => {
    expect(solarisWebhookSubscriptionsRepo.findOneByEvent).toBe(findOneByEvent);
  });
});
