import {
  CryptoLendingAccountDoc,
  CryptoLendingAccount,
} from '@bitwala-cryptobank-squad/package-schemas';
import { CryptoLendingAccountModel } from '../model';

export const insert = (
  acc: CryptoLendingAccount
): Promise<CryptoLendingAccountDoc> => {
  return CryptoLendingAccountModel.create(acc);
};
