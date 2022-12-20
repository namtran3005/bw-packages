import { Document, Schema } from 'mongoose';

export interface UpvestWebhookSubscription {
  webhookId: string;
  owner: string;
  url: string;
  path: string;
  name: string | null;
  hmacSecretKey: string;
  headers: object | null;
  version: string;
  status: string;
  eventFilters: Array<{
    eventNoun: string;
    eventVerb: string;
    protocolName: string;
    walletAddress: string;
    maxConfirmations: null;
    limitToApplication: false;
  }>;
}

export type UpvestWebhookSubscriptionDoc = Document & UpvestWebhookSubscription;

export const upvestWebhookSubscriptionSchema: Schema = new Schema(
  {
    webhookId: {
      type: String,
      required: true,
      index: true,
    },
    owner: {
      type: String,
      required: true,
      index: true,
    },
    url: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
      default: null,
    },
    hmacSecretKey: {
      type: String,
      required: true,
    },
    headers: {
      type: Object,
      required: false,
      default: null,
    },
    version: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    eventFilters: [
      {
        eventNoun: { type: String, required: true },
        eventVerb: { type: String, required: true },
        protocolName: { type: String, required: true },
        walletAddress: { type: String, required: true },
        maxConfirmations: { type: String, required: false, default: null },
        limitToApplication: { type: Boolean, required: false, default: null },
      },
    ],
  },

  { timestamps: true, collection: 'upvest-webhook-subscriptions' }
);
