import { findOneById } from './lib/findOneById';
import { removeOneById } from './lib/removeOneById';
import { findRecentRecipients } from './lib/findRecentRecipients';
import { upsert } from './lib/upsert';

export { SepaRecentRecipientModel } from './model';

export const sepaRecentRecipientRepo = {
  findOneById,
  removeOneById,
  findRecentRecipients,
  upsert,
};
