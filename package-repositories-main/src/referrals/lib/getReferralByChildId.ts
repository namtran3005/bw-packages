import { ReferralDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { ReferralModel } from '../model';

export const getReferralByChildId = (
  childUserId: string
): Promise<DocumentDefinition<ReferralDoc>[] | null> => {
  return ReferralModel.find({ childUserId }).lean().exec();
};
