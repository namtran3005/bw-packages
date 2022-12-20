import {
  CryptoLendingTransactionType,
  CryptoWalletProvider,
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { CryptoLendingTransactionModel } from '../model';

export const findSDADepositsIdsForOwner = (
  owner: string
): Promise<DocumentDefinition<string>[]> => {
  return CryptoLendingTransactionModel.find({
    owner,
    type: CryptoLendingTransactionType.DEPOSIT,
    cryptoWalletProvider: CryptoWalletProvider.SDA,
  })
    .distinct('_id')
    .lean()
    .exec();
};
