import { CryptoLendingAccountDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { CryptoLendingAccountModel } from '../model';

export const findOneByOwner = (
  owner: string
): Promise<DocumentDefinition<CryptoLendingAccountDoc> | null> => {
  return CryptoLendingAccountModel.findOne({ owner })
    .lean()
    .exec();
};
