import { UserDoc, PromoData } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const updatePromoData = (
  userId: string,
  promoData: PromoData
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    { $set: { promoData } },
    { runValidators: true }
  )
    .lean()
    .exec();
};
