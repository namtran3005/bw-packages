import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const getUserById = (userId: string): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOne({ _id: userId })
    .lean()
    .exec();
};
