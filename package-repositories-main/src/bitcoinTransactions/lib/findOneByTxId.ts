import { BitcoinTransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { BitcoinTransactionModel } from '../model';

export const findOneByTxId = (
  txId: string
): Promise<DocumentDefinition<BitcoinTransactionDoc> | null> => {
  return BitcoinTransactionModel.findOne({ txId })
    .lean()
    .exec();
};
