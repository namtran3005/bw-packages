import { AppRatingStatus, AppRatingPlatform } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserDoc, UserModel } from '../../users/model';

export const addAppRating = (
  userId: string,
  appRatingStatus: AppRatingStatus,
  appRatingPlatform: AppRatingPlatform
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    {
      $addToSet: {
        appRatings: {
          appRatingStatus,
          appRatingPlatform,
          appRatingDate: new Date(),
        },
      },
    },
    { runValidators: true }
  )
    .lean()
    .exec();
};
