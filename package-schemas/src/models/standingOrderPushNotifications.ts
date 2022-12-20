import { Document, Schema } from 'mongoose';
import { SepaScheduledTransactionEventStatus } from '@bitwala-cryptobank-squad/package-solaris';

export interface StandingOrderPushNotification {
  standingOrderId: string;
  notificationSentDate: Date;
  owner: string;
  transactionId?: string;
  status?: SepaScheduledTransactionEventStatus;
  declinedReason?: string;
}

export interface StandingOrderPushNotificationDoc
  extends StandingOrderPushNotification,
    Document {
  createdAt: Date;
  id: string;
}

export const standingOrderPushNotificationsSchema: Schema = new Schema(
  {
    standingOrderId: {
      type: String,
      required: true,
      index: true,
    },
    notificationSentDate: {
      type: Date,
      required: true,
    },
    owner: {
      type: String,
      required: true,
      index: true,
    },
    transactionId: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
    },
    declinedReason: {
      type: String,
      required: false,
    },
  },
  { timestamps: true, collection: 'standing-order-push-notifications' }
);

standingOrderPushNotificationsSchema.index(
  { transactionId: 1, status: 1 },
  { unique: true, sparse: true }
);
