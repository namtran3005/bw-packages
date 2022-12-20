import { Document, Schema, SchemaTypes } from 'mongoose';

// using this collection can be useful only for debug purposes so no point in fine-tuned schema & indices
export interface UpvestWebhookLog {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers: any;
  ipAddress?: string;
}

export type UpvestWebhookLogDoc = Document & UpvestWebhookLog;

export const upvestWebhookLogSchema: Schema = new Schema(
  {
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
  { timestamps: true, collection: 'upvest-webhook-logs' }
);
