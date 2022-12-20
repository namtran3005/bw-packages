import {
  SepaRecipientsDataSchema,
  SepaSavedRecipientsDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SepaSavedRecipientModel } from '../model';

export const insert = (
  data: SepaRecipientsDataSchema
): Promise<DocumentDefinition<SepaSavedRecipientsDoc> | null> => {
  return SepaSavedRecipientModel.create(data);
};
