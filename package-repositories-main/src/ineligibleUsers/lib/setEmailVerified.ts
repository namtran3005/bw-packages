import { IneligibleUserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { IneligibleUserModel } from '../model';

export const setEmailVerified = (
  id: string
): Promise<DocumentDefinition<IneligibleUserDoc> | DocumentDefinition<IneligibleUserDoc>[] | null> => {
  return IneligibleUserModel.updateOne(
    { _id: id },
    {
      $set: {
        emailVerified: true,
      },
      $unset: {
        verificationTokens: '',
      },
    }
  )
    .lean()
    .exec();
};
