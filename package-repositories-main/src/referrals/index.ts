import { insert } from './lib/insert';
import { getReferralByParentId } from './lib/getReferralByParentId';
import { getReferralByChildId } from './lib/getReferralByChildId'
import { getReferralByE2E } from './lib/getReferralByE2E';
import { updateReferral } from './lib/updateReferral';

export { ReferralModel } from './model';

export const referralsRepo = {
  insert,
  getReferralByParentId,
  getReferralByChildId,
  getReferralByE2E,
  updateReferral,
};
