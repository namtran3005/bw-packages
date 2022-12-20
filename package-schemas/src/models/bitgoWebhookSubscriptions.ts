import { Document, Schema } from 'mongoose';

export interface BitgoWebhookSubscriptionInput {
  bitgoId: string;
  walletBitgoId: string;
  coin: string;
  type: string;
  url: string;
  version: number;
  state: string;
  successiveFailedAttempts: number;
}

export interface BitgoWebhookSubscriptionDoc
  extends BitgoWebhookSubscriptionInput,
    Document {
  deactivatedAt?: Date;
}

export const bitgoWebhookSubscriptionSchema: Schema = new Schema(
  {
    bitgoId: {
      type: String,
      required: true,
      index: true,
    },
    walletBitgoId: {
      type: String,
      index: true,
      required: true,
    },
    coin: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    version: {
      type: Number,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    successiveFailedAttempts: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, collection: 'bitgo-webhook-subscriptions' }
);
