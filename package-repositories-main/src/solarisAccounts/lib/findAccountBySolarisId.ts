import { SolarisAccountDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisAccountModel } from '../model';
export const findAccountBySolarisId = (
  solarisId: string
): Promise<DocumentDefinition<SolarisAccountDoc> | null> => {
  return SolarisAccountModel.findOne({ solarisId })
    .lean()
    .exec();
};
