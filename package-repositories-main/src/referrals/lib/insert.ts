import {
  Referral,
  ReferralDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { ReferralModel } from '../model';

export const insert = (data: Referral): Promise<ReferralDoc> => {
  return ReferralModel.create(data);
};
