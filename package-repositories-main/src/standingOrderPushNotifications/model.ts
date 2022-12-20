import mongooseLeanId from 'mongoose-lean-id';
import {
  standingOrderPushNotificationsSchema,
  StandingOrderPushNotificationDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

standingOrderPushNotificationsSchema.plugin(mongooseLeanId);

export const StandingOrderBuyNotificationsModel = mainConnection.db.model<StandingOrderPushNotificationDoc>(
  'StandingOrderPushNotifications',
  standingOrderPushNotificationsSchema
);
