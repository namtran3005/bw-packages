import { UserDoc, UtmConfig } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const setUTM = (
  userId: string,
  utm: UtmConfig
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    {
      $set: {
        utm: {
          ...utm,
          when: new Date(),
        },
      },
    },
    { runValidators: true }
  )
    .lean()
    .exec();
};
