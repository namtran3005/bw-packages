import { findByOwner } from './lib/findByOwner';
import { insert } from './lib/insert';
import { remove } from './lib/remove';
import { markAsVerified } from './lib/markAsVerified';

export { SolarisDeviceModel } from './model';

export const solarisDevicesRepo = {
  findByOwner,
  insert,
  remove,
  markAsVerified,
};
