import { SolarisDeviceChallengeDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisDeviceChallengeModel } from '../model';

export const findByChallengeId = (
  challengeId: string
): Promise<DocumentDefinition<SolarisDeviceChallengeDoc>[]> => {
  return SolarisDeviceChallengeModel.find({
    challengeId,
  })
    .lean()
    .exec();
};
