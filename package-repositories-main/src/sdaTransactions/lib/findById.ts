import { SdaTransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SdaTransactionModel } from '../model';

export const findById = (id: string): Promise<DocumentDefinition<SdaTransactionDoc> | null> => {
  return SdaTransactionModel.findById(id)
    .lean()
    .exec();
};
