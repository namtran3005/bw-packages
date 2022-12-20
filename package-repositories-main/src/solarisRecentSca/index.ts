import { findByOwnerAndDeviceId } from './lib/findByOwnerAndDeviceId';
import { insertOrUpdate } from './lib/insertOrUpdate';

export { SolarisRecentScaModel } from './model';

export const solarisRecentScaRepo = {
  findByOwnerAndDeviceId,
  insertOrUpdate
};
