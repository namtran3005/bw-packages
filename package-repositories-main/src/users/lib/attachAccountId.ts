import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const attachAccountId = (
  userId: string,
  solarisAccountSolarisId: string
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    { $set: { solarisAccountSolarisId } },
    { runValidators: true }
  )
    .lean()
    .exec();
};
