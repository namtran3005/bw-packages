import { DocumentDefinition } from 'mongoose';
import { UserDoc, UserModel } from '../../users/model';

export const updateAcceptedTerms = (
  userId: string,
  update: {
    solarisTermsAndConditionsSignedAt: string;
    solarisTradingTermsAndConditionsSignedAt: string;
    bitwalaTermsAndConditionsSignedAt: string;
  }
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    {
      $set: {
        termsConditionsSignedAt: update.solarisTermsAndConditionsSignedAt,
        solarisTermsAndConditionsSignedAt:
          update.solarisTradingTermsAndConditionsSignedAt,
        bitwalaTermsAndConditionsSignedAt:
          update.bitwalaTermsAndConditionsSignedAt,
      },
    },
    { runValidators: true }
  )
    .lean()
    .exec();
};
