import { SdaTransaction, SdaTransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { SdaTransactionModel } from '../model';

export const insert = (input: SdaTransaction): Promise<SdaTransactionDoc> => {
  return SdaTransactionModel.create(input);
};
