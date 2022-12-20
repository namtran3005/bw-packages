import { DocumentDefinition } from 'mongoose';
import { UserDoc, UserModel } from '../../users/model';

export const updateTradingLimit = (
  userId: string,
  tradingLimit: number
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate({ _id: userId }, { $set: { tradingLimit } })
    .lean()
    .exec();
};
