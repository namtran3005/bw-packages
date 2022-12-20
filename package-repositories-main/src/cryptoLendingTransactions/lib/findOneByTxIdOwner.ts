import { CryptoLendingTransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { CryptoLendingTransactionModel } from '../model';

export const findOneByTxIdOwner = (
  txId: string,
  owner: string
): Promise<DocumentDefinition<CryptoLendingTransactionDoc> | null> => {
  return CryptoLendingTransactionModel.findOne({ txId, owner }).lean().exec();
};
