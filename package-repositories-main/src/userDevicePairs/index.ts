import { findOne } from './lib/findOne';
import { insert } from './lib/insert';
import { unpair } from './lib/unpair';

export { UserDevicePairsModel } from './model';

export const userDevicePairsRepo = {
  findOne,
  insert,
  unpair,
};
