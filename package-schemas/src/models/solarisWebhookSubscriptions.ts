import { Document, Schema } from 'mongoose';

export interface SolarisWebhookSubscription {
  eventType: string;
  url: string;
  secret: string;
}

export type SolarisWebhookSubscriptionDoc = Document &
  SolarisWebhookSubscription;

export const solarisWebhookSubscriptionSchema: Schema = new Schema(
  {
    eventType: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    secret: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, collection: 'solaris-webhook-subscriptions' }
);
