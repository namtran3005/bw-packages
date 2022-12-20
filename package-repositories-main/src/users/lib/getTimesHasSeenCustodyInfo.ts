import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { UserModel } from '../model';

export const getTimesHasSeenCustodyInfo = (
  userId: string
): Promise<Pick<UserDoc, 'timesHasSeenCustodyInfo'> | null> => {
  return UserModel.findOne(
    { _id: userId },
    { _id: 0, timesHasSeenCustodyInfo: 1 }
  )
    .lean()
    .exec();
};
