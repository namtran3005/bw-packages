import { SdaEntityState } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';

import { UserDoc, UserModel } from '../../users/model';

export const updateSdaEntityStatusBySdaEntityId = (
  sdaEntityId: string,
  sdaEntityStatus: SdaEntityState
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { sdaEntityId },
    { $set: { sdaEntityStatus } }
  )
    .lean()
    .exec();
};
