import { UserModel } from '../../users/model';

// Save date on which user accepted the Bitwala and Solaris Custody Terms & Conditions
export const addCustodyTermsAndConditionsSignedAt = async (
  userId: string
): Promise<boolean> => {
  const now = new Date();
  const userDoc = await UserModel.findOneAndUpdate(
    { _id: userId },
    {
      $set: {
        bitwalaCustodyTermsAndConditionsSignedAt: now,
        solarisCustodyTermsAndConditionsSignedAt: now,
      },
    },
    { runValidators: true }
  )
    .lean()
    .exec();
  return userDoc !== null;
};
