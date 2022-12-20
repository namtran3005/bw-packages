import { Document, Schema, SchemaTypes } from 'mongoose';

// using this collection can be useful only for debug purposes so no point in fine-tuned schema & indices
export interface TradingLimitUpdateWebhookLog {
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers: any;
  ipAddress?: string;
}

export type TradingLimitUpdateWebhookLogDoc = Document &
  TradingLimitUpdateWebhookLog;

export const TradingLimitUpdateWebhookLogSchema: Schema = new Schema(
  {
    path: {
      type: String,
      required: true,
    },
    headers: {
      type: Schema.Types.Mixed,
    },
    payload: {
      type: SchemaTypes.Mixed,
    },
    error: {
      type: Schema.Types.Mixed,
    },
    ipAddress: {
      type: String,
    },
  },
  { timestamps: true, collection: 'trading-limit-update-webhook-logs' }
);
