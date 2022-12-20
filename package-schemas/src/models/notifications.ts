import { Document, Schema } from 'mongoose';

export interface Variables {
  [key: string]: string;
}
export interface NotificationDoc extends Document {
  id: string;
  event: string;
  userId: string;
  email: boolean;
  push: boolean;
  variables: Variables;
  createdAt: Date;
}

export const notificationsSchema: Schema = new Schema(
  {
    event: {
      index: true,
      type: String,
      required: false,
    },
    userId: {
      index: true,
      type: String,
      required: true,
    },
    email: {
      type: Boolean,
      required: true,
    },
    push: {
      type: Boolean,
      required: true,
    },
    variables: {
      type: Object,
    },
  },
  { timestamps: true, collection: 'notifications' }
);

notificationsSchema.index({ createdAt: 1 });
