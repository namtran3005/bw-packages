import { SdaTransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SdaTransactionModel } from '../model';

export const update = (
  solarisId: string,
  tx: Partial<SdaTransactionDoc>
): Promise<DocumentDefinition<SdaTransactionDoc> | null> => {
  return SdaTransactionModel.findOneAndUpdate(
    { solarisId },
    { $set: tx },
    { runValidators: true, new: true }
  )
    .lean()
    .exec();
};
