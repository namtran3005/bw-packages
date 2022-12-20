import { SepaSavedRecipientModel } from '../model';

export const removeOneById = (recipientId: string) => {
  return SepaSavedRecipientModel.deleteOne({ _id: recipientId }).exec();
};
