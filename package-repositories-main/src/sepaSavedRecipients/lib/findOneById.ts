import { SepaSavedRecipientsDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SepaSavedRecipientModel } from '../model';

export const findOneById = (
  recipeintId: string
): Promise<DocumentDefinition<SepaSavedRecipientsDoc> | null> => {
  return SepaSavedRecipientModel.findOne({ _id: recipeintId })
    .lean()
    .exec();
};
