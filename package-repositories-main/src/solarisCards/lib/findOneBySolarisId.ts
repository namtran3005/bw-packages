import { SolarisCardDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisCardModel } from '../model';

export const findOneBySolarisId = (
  solarisId: string
): Promise<DocumentDefinition<SolarisCardDoc> | null>=> {
  return SolarisCardModel.findOne({ solarisId })
    .lean()
    .exec();
};
