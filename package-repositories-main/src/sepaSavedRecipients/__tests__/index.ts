import { sepaSavedRecipientRepo } from '../index';
import { findAllByOwner } from '../lib/findAllByOwner';
import { insert } from '../lib/insert';
import { removeOneById } from '../lib/removeOneById';

describe('SEPA Saved Recipient Repo', () => {
  it('should export findAllByUserId', () => {
    expect(sepaSavedRecipientRepo.findAllByOwner).toBe(findAllByOwner);
  });
  it('should export upsertOne', () => {
    expect(sepaSavedRecipientRepo.insert).toBe(insert);
  });
  it('should export removeOne', () => {
    expect(sepaSavedRecipientRepo.removeOneById).toBe(removeOneById);
  });
});
