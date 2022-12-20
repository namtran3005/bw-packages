import { SolarisIdentificationDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisIdentificationModel } from '../model';

export const findOneById = (
  id: string
): Promise<DocumentDefinition<SolarisIdentificationDoc> | null> => {
  return SolarisIdentificationModel.findOne({
    _id: id,
  })
    .lean()
    .exec();
};
