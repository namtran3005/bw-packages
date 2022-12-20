import mongooseLeanId from 'mongoose-lean-id';
import {
  sepaRecentRecipientSchema,
  SepaRecentRecipientsDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

sepaRecentRecipientSchema.plugin(mongooseLeanId);

export const SepaRecentRecipientModel = mainConnection.db.model<
  SepaRecentRecipientsDoc
>('SepaRecentRecipients', sepaRecentRecipientSchema);
