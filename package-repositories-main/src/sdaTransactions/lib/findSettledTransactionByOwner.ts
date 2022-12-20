import {
  SdaTransactionDoc,
  SdaTransactionState,
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SdaTransactionModel } from '../model';

export const findSettledTransactionByOwner = (
  owner: string
): Promise<DocumentDefinition<SdaTransactionDoc>[]> => {
  return SdaTransactionModel.find({
    owner,
    state: SdaTransactionState.COMPLETED,
  })
    .lean()
    .exec();
};
