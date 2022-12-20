import { SepaRecentRecipientsDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SepaRecentRecipientModel } from '../model';

export interface FindRecentRecipientsOptions {
  limit: number;
}

export const findRecentRecipients = async (
  userId: string,
  options: FindRecentRecipientsOptions
): Promise<DocumentDefinition<SepaRecentRecipientsDoc>[]> => {
  const { limit } = options;

  return SepaRecentRecipientModel.find({ owner: userId })
    .sort({ lastTransactionAt: -1 })
    .limit(limit)
    .lean()
    .exec();
};
