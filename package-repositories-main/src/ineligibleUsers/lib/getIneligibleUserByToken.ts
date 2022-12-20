import { IneligibleUserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { IneligibleUserModel } from '../model';

export const getIneligibleUserByToken = (
  token: string
): Promise<DocumentDefinition<IneligibleUserDoc> | DocumentDefinition<IneligibleUserDoc>[] | null> => {
  return IneligibleUserModel.findOne({
    'verificationTokens.token': token,
    emailVerified: false,
  })
    .lean()
    .exec();
};
