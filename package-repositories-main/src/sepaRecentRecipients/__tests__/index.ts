import { sepaRecentRecipientRepo } from '../index';
import { findOneById } from '../lib/findOneById';
import { removeOneById } from '../lib/removeOneById';
import { findRecentRecipients } from '../lib/findRecentRecipients';
import { upsert } from '../lib/upsert';

describe('SEPA Recent Recipient Repo', () => {
  it('should export findOneById', () => {
    expect(sepaRecentRecipientRepo.findOneById).toBe(findOneById);
  });
  it('should export removeOne', () => {
    expect(sepaRecentRecipientRepo.removeOneById).toBe(removeOneById);
  });
  it('should export findRecentRecipients', () => {
    expect(sepaRecentRecipientRepo.findRecentRecipients).toBe(
      findRecentRecipients
    );
  });
  it('should export upsert', () => {
    expect(sepaRecentRecipientRepo.upsert).toBe(upsert);
  });
});
