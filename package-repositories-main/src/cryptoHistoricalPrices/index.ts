export { CryptoHistoricalPricesModel } from './model';
export { PresetName } from './lib/aggregate';

import { aggregate } from './lib/aggregate';
import { upsert } from './lib/upsert';
import { insert } from './lib/insert';

export const cryptoHistoricalPricesRepo = {
  aggregate,
  upsert,
  insert,
};
