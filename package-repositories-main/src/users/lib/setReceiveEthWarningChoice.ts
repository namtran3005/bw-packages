import { DocumentDefinition } from 'mongoose';
import { UserDoc, UserModel } from '../../users/model';

export const setReceiveEthWarningChoice = (
  userId: string,
  choice: string
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    {
      $set: {
        receiveEthWarningModal: {
          choice,
          lastUpdated: new Date().toISOString(),
        },
      },
    },
    { runValidators: true }
  )
    .lean()
    .exec();
};
