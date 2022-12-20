import mongooseLeanId from 'mongoose-lean-id';
import {
  sepaSavedRecipientSchema,
  SepaSavedRecipientsDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

sepaSavedRecipientSchema.plugin(mongooseLeanId);

export const SepaSavedRecipientModel = mainConnection.db.model<
  SepaSavedRecipientsDoc
>('SepaSavedRecipients', sepaSavedRecipientSchema);
