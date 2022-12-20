import { SdaAccountDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SdaAccountModel } from '../model';

export const findOneBySolarisId = (
  solarisId: string
): Promise<DocumentDefinition<SdaAccountDoc> | null> => {
  return SdaAccountModel.findOne({ solarisId })
    .lean()
    .exec();
};
