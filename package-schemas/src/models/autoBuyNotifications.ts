import { Document, Schema } from 'mongoose';

export interface AutoBuyNotifications {
  autoBuyRuleId: string;
  notificationSentDate: Date;
  owner: string;
}

export interface AutoBuyNotificationsDoc
  extends AutoBuyNotifications,
    Document {
  createdAt: Date;
  id: string;
}

export const autoBuyNotificationsSchema: Schema = new Schema(
  {
    autoBuyRuleId: {
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
  },
  { timestamps: true, collection: 'auto-buy-notifications' }
);
