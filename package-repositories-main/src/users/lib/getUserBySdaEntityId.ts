import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const getUserBySdaEntityId = (
  sdaEntityId: string
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOne({ sdaEntityId })
    .lean()
    .exec();
};
