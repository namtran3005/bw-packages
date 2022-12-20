import { SdaTransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SdaTransactionModel } from '../model';

export const findOneBySolarisId = (
  solarisId: string
): Promise<DocumentDefinition<SdaTransactionDoc> | null> => {
  return SdaTransactionModel.findOne({ solarisId })
    .lean()
    .exec();
};
