import { DocumentDefinition } from 'mongoose';
import { UserDoc, UserModel } from '../model';
import { getTimesHasSeenCustodyInfo } from './getTimesHasSeenCustodyInfo';

export const incrementTimesHasSeenCustodyInfo = async (
  userId: string
): Promise<DocumentDefinition<UserDoc> | null> => {
  const timesHasSeenCustodyInfoObject = await getTimesHasSeenCustodyInfo(
    userId
  );

  let hasSeenCustodyInfoNumber = timesHasSeenCustodyInfoObject?.timesHasSeenCustodyInfo
    ? timesHasSeenCustodyInfoObject?.timesHasSeenCustodyInfo
    : 0;

  return UserModel.findOneAndUpdate(
    { _id: userId },
    {
      $set: {
        timesHasSeenCustodyInfo: ++hasSeenCustodyInfoNumber,
      },
    },
    {
      new: true,
      upsert: true,
      runValidators: true,
      setDefaultsOnInsert: true,
    }
  )
    .lean()
    .exec();
};
