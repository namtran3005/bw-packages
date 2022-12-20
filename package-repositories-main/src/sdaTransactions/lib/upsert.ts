import { SdaTransaction, SdaTransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SdaTransactionModel } from '../model';

export const upsert = (input: SdaTransaction): Promise<DocumentDefinition<SdaTransactionDoc> | null> => {
  return SdaTransactionModel.findOneAndUpdate(
    { solarisId: input.solarisId },
    { $set: { ...input } },
    { new: true, upsert: true, runValidators: true }
  )
    .lean()
    .exec();
};
