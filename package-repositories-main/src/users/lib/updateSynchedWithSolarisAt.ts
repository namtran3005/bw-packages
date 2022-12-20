import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const updateSynchedWithSolarisAt = (
  userId: string
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    { $set: { synchedWithSolarisAt: new Date() } },
    { runValidators: true, new: true }
  )
    .lean()
    .exec();
};
