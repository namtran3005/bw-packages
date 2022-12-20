import mongooseLeanId from 'mongoose-lean-id';
import {
  notificationsSchema,
  NotificationDoc as NotificationDocType,
  Variables as VariablesType,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

export type NotificationDoc = NotificationDocType;
export type Variables = VariablesType;

notificationsSchema.plugin(mongooseLeanId);
export const NotificationsModel = mainConnection.db.model<NotificationDoc>(
  'Notifications',
  notificationsSchema
);
