import { ReferralDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { ReferralModel } from '../model';

export const getReferralByE2E = (
  end_to_end: string
): Promise<DocumentDefinition<ReferralDoc> | null> => {
  return ReferralModel.findOne({ end_to_end }).lean().exec();
};
