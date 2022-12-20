import { Document, Schema } from 'mongoose';

export interface CryptoTaxWebhookLog {
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers: any;
  ipAddress?: string;
}

export type CryptoTaxWebhookLogsDoc = Document & CryptoTaxWebhookLog;

const cryptoTaxWebhookLogsShape = {
  path: {
    type: String,
    required: true,
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
};

export const cryptoTaxWebhookLogsSchema: Schema = new Schema(
  cryptoTaxWebhookLogsShape,
  { timestamps: true, collection: 'crypto-tax-webhook-logs' }
);
