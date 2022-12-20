import { CryptoLendingTransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { CryptoLendingTransactionModel } from '../model';

export const findOneBySdaTxSolarisId = (
  sdaTxSolarisId: string
): Promise<DocumentDefinition<CryptoLendingTransactionDoc> | null> => {
  return CryptoLendingTransactionModel.findOne({ sdaTxSolarisId })
    .lean()
    .exec();
};
