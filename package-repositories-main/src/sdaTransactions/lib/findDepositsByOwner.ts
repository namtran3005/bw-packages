import {
  SdaTransactionDoc,
  SdaTransactionState,
  SdaTransactionType,
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SdaTransactionModel } from '../model';

export const findDepositsByOwner = (conditions: {
  owner: string;
}): Promise<DocumentDefinition<SdaTransactionDoc>[]> => {
  return SdaTransactionModel.find({
    ...conditions,
    type: SdaTransactionType.DEPOSIT,
    state: SdaTransactionState.COMPLETED,
  })
    .lean()
    .exec();
};
