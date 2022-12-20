import { SolarisChallengeSmsDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisChallengeSmsModel } from '../model';

export const findOneBySolarisId = (
  solarisId: string
): Promise<DocumentDefinition<SolarisChallengeSmsDoc> | null> => {
  return SolarisChallengeSmsModel.findOne({ solarisId })
    .lean()
    .exec();
};
