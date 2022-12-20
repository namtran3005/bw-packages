import { SolarisChallengeSmsDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisChallengeSmsModel } from '../model';

export const markUsedById = (
  id: string
): Promise<DocumentDefinition<SolarisChallengeSmsDoc> | null> => {
  return SolarisChallengeSmsModel.findOneAndUpdate(
    { _id: id },
    { $set: { usedAt: new Date() } },
    { runValidators: true }
  )
    .lean()
    .exec();
};
