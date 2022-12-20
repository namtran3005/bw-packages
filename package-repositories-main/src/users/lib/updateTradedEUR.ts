import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const updateTradedEUR = (
  userId: string,
  tradedEUR: number,
  tradingLimitReached: boolean
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    {
      $set: {
        tradedEUR,
        tradingLimitReached,
        hasMadeATrade: true,
      },
    },
    { runValidators: true }
  )
    .lean()
    .exec();
};
