import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { UserModel } from '../model';

export const getHasSeenUpdateSODescriptionWidget = (
  userId: string
): Promise<Pick<UserDoc, 'hasSeenUpdateSODescriptionWidget'> | null> => {
  return UserModel.findOne(
    { _id: userId, hasSeenUpdateSODescriptionWidget: true },
    { _id: 0, hasSeenUpdateSODescriptionWidget: 1 }
  )
    .lean()
    .exec();
};
