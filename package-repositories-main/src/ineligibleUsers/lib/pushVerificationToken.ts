import { IneligibleUserDoc, VerificationToken } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { IneligibleUserModel } from '../model';

export const pushVerificationToken = (
  email: string,
  tokenObj: VerificationToken
): Promise<DocumentDefinition<IneligibleUserDoc> | DocumentDefinition<IneligibleUserDoc>[] | null> => {
  return IneligibleUserModel.updateOne(
    { email },
    {
      $push: {
        verificationTokens: tokenObj,
      },
    }
  )
    .lean()
    .exec();
};
