import { findOneByOwner } from './lib/findOneByOwner';
import { insert } from './lib/insert';

export const userSpecialPurposeAddressesRepo = {
  findOneByOwner,
  insert,
};
