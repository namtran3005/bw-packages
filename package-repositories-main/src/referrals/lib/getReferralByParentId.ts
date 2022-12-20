import { ReferralDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { ReferralModel } from '../model';

export const getReferralByParentId = (
  parentUserId: string
): Promise<DocumentDefinition<ReferralDoc>[]> => {
  return ReferralModel.find({ parentUserId }).lean().exec();
};
