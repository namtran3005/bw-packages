import { Document, Schema } from 'mongoose';

export interface TradingWebhookLog {
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers: any;
  ipAddress?: string;
  statusCode?: number;
}

export type TradingWebhookLogDoc = Document & TradingWebhookLog;

export const tradingWebhookLogSchema: Schema = new Schema(
  {
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
    statusCode: {
      type: Number,
    },
  },
  { timestamps: true, collection: 'trading-webhook-logs' }
);
