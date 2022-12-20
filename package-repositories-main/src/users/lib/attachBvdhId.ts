import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';
export const attachBvdhId = (
  userId: string,
  bvdhId: string
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    { $set: { bvdhId } },
    { runValidators: true }
  )
    .lean()
    .exec();
};
