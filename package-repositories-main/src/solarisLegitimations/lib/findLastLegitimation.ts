import { SolarisLegitimationDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisLegitimationsModel } from '../model';

export const findLastLegitimation = (
  userId: string
): Promise<DocumentDefinition<SolarisLegitimationDoc> | null> => {
  return SolarisLegitimationsModel.findOne({
    owner: userId,
  })
    .sort({ legitimationValidUntil: -1 })
    .lean()
    .exec();
};
