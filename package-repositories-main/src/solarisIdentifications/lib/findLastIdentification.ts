import { SolarisIdentificationDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisIdentificationModel } from '../model';

export const findLastIdentification = (
  userId: string
): Promise<DocumentDefinition<SolarisIdentificationDoc> | null> => {
  return SolarisIdentificationModel.findOne({
    owner: userId,
  })
    .sort({ createdAt: -1 })
    .lean()
    .exec();
};
