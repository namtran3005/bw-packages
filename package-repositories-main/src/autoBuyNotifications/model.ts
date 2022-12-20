import mongooseLeanId from 'mongoose-lean-id';
import {
  autoBuyNotificationsSchema,
  AutoBuyNotificationsDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

autoBuyNotificationsSchema.plugin(mongooseLeanId);

export const AutoBuyNotificationsModel = mainConnection.db.model<
  AutoBuyNotificationsDoc
>('AutoBuyNotifications', autoBuyNotificationsSchema);
