import { SepaSavedRecipientsDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SepaSavedRecipientModel } from '../model';

export const findAllByOwner = (
  userId: string
): Promise<DocumentDefinition<SepaSavedRecipientsDoc>[]> => {
  return SepaSavedRecipientModel.find({ owner: userId })
    .sort({ name: 1 })
    .lean()
    .exec();
};
