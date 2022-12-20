import { CryptoLendingTransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { CryptoLendingTransactionModel } from '../model';

export const findOneByWithdrawalId = (
  withdrawalId: string
): Promise<DocumentDefinition<CryptoLendingTransactionDoc> | null> => {
  return CryptoLendingTransactionModel.findOne({ withdrawalId })
    .lean()
    .exec();
};
