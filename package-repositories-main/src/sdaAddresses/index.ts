import { findRecentByAccountId } from './lib/findRecentByAccountId';
import { findOneByAccountId } from './lib/findOneByAccountId';
import { findOneByAddress } from './lib/findOneByAddress';
import { insert } from './lib/insert';

export { SdaAddressModel } from './model';

export const sdaAddressRepo = {
  findRecentByAccountId,
  findOneByAccountId,
  findOneByAddress,
  insert,
};
