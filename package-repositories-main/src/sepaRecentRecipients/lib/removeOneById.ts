import { SepaRecentRecipientModel } from '../model';

export const removeOneById = (recipientId: string) => {
  return SepaRecentRecipientModel.deleteOne({ _id: recipientId }).exec();
};
