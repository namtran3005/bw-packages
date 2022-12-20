import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const getUserByBvdhId = (bvdhId: string): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOne({ bvdhId }).lean().exec();
};
