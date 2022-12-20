import { SdaAccountClosureRequestDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SdaAccountClosureRequestModel } from '../model';

export const findOneBySolarisId = (
  solarisId: string
): Promise<DocumentDefinition<SdaAccountClosureRequestDoc> | null> => {
  return SdaAccountClosureRequestModel.findOne({ solarisId })
    .lean()
    .exec();
};
