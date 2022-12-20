import {
  CryptoLendingAccountDoc,
  CryptoLendingAccount,
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { CryptoLendingAccountModel } from '../model';

export const updateOneByOwner = (
  owner: string,
  fieldsToUpdate: Partial<
    Pick<
      CryptoLendingAccount,
      | 'balances'
      | 'interestBalances'
      | 'kycStatus'
      | 'accountStatus'
      | 'celsiusTermsAndConditions'
    >
  >
): Promise<DocumentDefinition<CryptoLendingAccountDoc> | null> => {
  return CryptoLendingAccountModel.findOneAndUpdate({ owner }, fieldsToUpdate, {
    new: true,
    upsert: false,
    runValidators: true,
  })
    .lean()
    .exec();
};
