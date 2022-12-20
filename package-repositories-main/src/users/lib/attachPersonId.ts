import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';
export const attachPersonId = (
  userId: string,
  solarisPersonSolarisId: string
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    { $set: { solarisPersonSolarisId } },
    { runValidators: true }
  )
    .lean()
    .exec();
};
