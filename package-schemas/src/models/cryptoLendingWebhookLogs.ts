import { Document, Schema } from 'mongoose';

// using this collection can be useful only for debug purposes so no point in fine-tuned schema & indices
export interface CryptoLendingWebhookLog {
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers: any;
  ipAddress?: string;
  anonymisedAt?: Date;
}

export type CryptoLendingWebhookLogDoc = Document & CryptoLendingWebhookLog;

export const cryptoLendingWebhookLogSchema: Schema = new Schema(
  {
    path: {
      type: String,
    },
    headers: {
      type: Schema.Types.Mixed,
    },
    payload: {
      type: Schema.Types.Mixed,
    },
    error: {
      type: Schema.Types.Mixed,
    },
    ipAddress: {
      type: String,
    },
    anonymisedAt: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true, collection: 'crypto-lending-webhook-logs' }
);

cryptoLendingWebhookLogSchema.index({
  'payload.deposit.owner': 1,
});
