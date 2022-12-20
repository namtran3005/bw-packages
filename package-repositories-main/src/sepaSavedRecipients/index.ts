import { findOneById } from './lib/findOneById';
import { findAllByOwner } from './lib/findAllByOwner';
import { insert } from './lib/insert';
import { removeOneById } from './lib/removeOneById';

export { SepaSavedRecipientModel } from './model';

export const sepaSavedRecipientRepo = {
  findOneById,
  findAllByOwner,
  insert,
  removeOneById,
};
