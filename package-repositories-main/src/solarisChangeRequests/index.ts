import { insert } from './lib/insert';
import { markUsedBySolarisId } from './lib/markUsedBySolarisId';

export { SolarisChangeRequestsModel } from './model';

export const solarisChangeRequestsRepo = {
  insert,
  markUsedBySolarisId,
};
