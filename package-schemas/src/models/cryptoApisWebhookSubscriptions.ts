import { Document, Schema } from 'mongoose';

export interface CryptoApisWebhookSubscription {
  referenceId: string;
  owner: string;
  walletId: string;
  /**
   * Please don't depend on this value - we currently don't sync it, so it might not reflect the real status.
   */
  isActive: boolean;
  callbackUrl: string;
  callbackSecretKey?: string;
  createdTimestamp: Date;
  endpointSpecificData?: unknown;
}

export type CryptoApisWebhookSubscriptionDoc = Document &
  CryptoApisWebhookSubscription;

export const cryptoApisWebhookSubscriptionSchema: Schema = new Schema(
  {
    referenceId: {
      type: String,
      required: true,
      index: true,
    },
    owner: {
      type: String,
      required: true,
      index: true,
    },
    walletId: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
    callbackUrl: {
      type: String,
      required: true,
    },
    callbackSecretKey: {
      type: String,
    },
    createdTimestamp: {
      type: Date,
      required: true,
    },
    endpointSpecificData: {
      type: Schema.Types.Mixed,
    },
  },

  { timestamps: true, collection: 'cryptoapis-webhook-subscriptions' }
);
