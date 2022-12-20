import { IncomingHttpHeaders } from 'http';
import { Document, Schema } from 'mongoose';

export interface CryptoApisWebhookLog {
  headers: IncomingHttpHeaders;
  ipAddress?: string;
  payload?: unknown;
  error?: unknown;
}

export type CryptoApisWebhookLogDoc = Document & CryptoApisWebhookLog;

export const cryptoApisWebhookLogSchema: Schema = new Schema(
  {
    headers: {
      type: Object,
      required: true,
    },
    ipAddress: {
      type: String,
    },
    payload: {
      type: Schema.Types.Mixed,
    },
    error: {
      type: Schema.Types.Mixed,
    },
  },

  { timestamps: true, collection: 'cryptoapis-webhook-logs' }
);
