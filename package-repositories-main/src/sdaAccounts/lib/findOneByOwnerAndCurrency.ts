import { SdaAccountDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { Currencies } from '@bitwala-cryptobank-squad/package-solaris';
import { DocumentDefinition } from 'mongoose';
import { SdaAccountModel } from '../model';

export const findOneByOwnerAndCurrency = (
  owner: string,
  currency: Currencies
): Promise<DocumentDefinition<SdaAccountDoc> | null> => {
  return SdaAccountModel.findOne({ owner, currency })
    .sort({ createdAt: -1 })
    .lean()
    .exec();
};
