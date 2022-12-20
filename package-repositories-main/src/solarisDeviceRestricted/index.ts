import { findByOwnerAndDeviceName } from './lib/findByOwnerAndDeviceName';
import { insert } from './lib/insert';
import { remove } from './lib/remove';

export { SolarisDeviceRestrictedModel } from './model';

export const solarisDevicesRestrictedRepo = {
  findByOwnerAndDeviceName,
  insert,
  remove,
};
