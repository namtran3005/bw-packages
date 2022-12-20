import { insert } from '../lib/insert';
import { findOneByReferenceId } from '../lib/findOneByReferenceId';

import { cryptoApisWebhookSubscriptionsRepo } from '../index';

describe('cryptoApisWebhookSubscriptionsRepo', () => {
  it('should export methods', () => {
    expect(cryptoApisWebhookSubscriptionsRepo.insert).toBe(insert);
    expect(cryptoApisWebhookSubscriptionsRepo.findOneByReferenceId).toBe(
      findOneByReferenceId
    );
  });
});
