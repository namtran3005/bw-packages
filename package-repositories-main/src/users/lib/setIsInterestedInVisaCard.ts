import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const setIsInterestedInVisaCard = (
  userId: string,
  isInterestedInVisaCard: boolean | null
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    {
      $set: {
        isInterestedInVisaCard,
      },
    },
    { runValidators: true }
  )
    .lean()
    .exec();
};
