import { SolarisChangeRequestsDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisChangeRequestsModel } from '../model';

export const markUsedBySolarisId = (
  id: string
): Promise<DocumentDefinition<SolarisChangeRequestsDoc> | null> => {
  return SolarisChangeRequestsModel.findOneAndUpdate(
    { solarisId: id },
    { $set: { usedAt: new Date() } },
    { runValidators: true }
  )
    .lean()
    .exec();
};
