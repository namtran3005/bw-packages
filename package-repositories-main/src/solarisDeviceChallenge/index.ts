import { findByChallengeId } from './lib/findByChallengeId';
import { insert } from './lib/insert';
import { markAsVerified } from './lib/markAsVerified';

export { SolarisDeviceChallengeModel } from './model';

export const solarisDeviceChallengeRepo = {
  findByChallengeId,
  insert,
  markAsVerified,
};
