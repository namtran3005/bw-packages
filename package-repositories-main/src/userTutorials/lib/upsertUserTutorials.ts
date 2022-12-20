import { UserTutorials } from '@bitwala-cryptobank-squad/package-schemas';
import { UserTutorialsModel } from '../model';

export const upsertUserTutorials = (owner: string, input: UserTutorials) => {
  return UserTutorialsModel.findOneAndUpdate(
    { owner },
    { $set: input },
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
