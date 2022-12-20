import { SolarisPersonDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisPersonModel } from '../model';

export const findOneBySolarisId = (
  solarisId: string
): Promise<DocumentDefinition<SolarisPersonDoc> | null> => {
  return SolarisPersonModel.findOne({ solarisId })
    .lean()
    .exec();
};
