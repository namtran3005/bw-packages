import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const getUserIdsBeforeCreatedAt = ({
  date,
}: {
  date: Date;
}): Promise<DocumentDefinition<string>[]> => {
  return UserModel.find({
    createdAt: {
      $lt: date,
    },
    isVerified: true,
    solarisPersonSolarisId: { $exists: true, $ne: '' },
  })
    .distinct('_id')
    .lean()
    .exec();
};
