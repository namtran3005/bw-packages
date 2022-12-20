import { SepaRecentRecipientsDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SepaRecentRecipientModel } from '../model';

export const findOneById = (
  recipientId: string
): Promise<DocumentDefinition<SepaRecentRecipientsDoc> | null> => {
  return SepaRecentRecipientModel.findOne({ _id: recipientId })
    .lean()
    .exec();
};
