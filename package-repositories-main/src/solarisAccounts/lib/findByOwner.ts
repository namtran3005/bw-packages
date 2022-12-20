import { SolarisAccountDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisAccountModel } from '../model';
export const findByOwner = (
  owner: string
): Promise<DocumentDefinition<SolarisAccountDoc> | null> => {
  return SolarisAccountModel.findOne({ owner })
    .lean()
    .exec();
};
