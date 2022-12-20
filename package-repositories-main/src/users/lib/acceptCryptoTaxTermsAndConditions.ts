import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const acceptCryptoTaxTermsAndConditions = (
  userId: string
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    {
      _id: userId,
      cryptoTaxAcceptedAt: { $exists: false },
    },
    {
      $set: {
        cryptoTaxAcceptedAt: new Date(),
      },
    },
    { runValidators: true, new: true }
  )
    .lean()
    .exec();
};
