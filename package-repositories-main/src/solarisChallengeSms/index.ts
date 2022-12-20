import { insert } from './lib/insert';
import { findOneBySolarisId } from './lib/findOneBySolarisId';
import { markUsedById } from './lib/markUsedById';

export { SolarisChallengeSmsModel } from './model';

export const solarisChallengeSmsRepo = {
  findOneBySolarisId,
  insert,
  markUsedById,
};
