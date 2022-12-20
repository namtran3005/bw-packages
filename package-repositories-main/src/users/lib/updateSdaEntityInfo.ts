import { SdaEntityState } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';

import { UserDoc, UserModel } from '../../users/model';

export const updateSdaEntityInfo = (
  userId: string,
  sdaEntityId: string,
  sdaEntityState: SdaEntityState
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    { $set: { sdaEntityId, sdaEntityState } }
  )
    .lean()
    .exec();
};
