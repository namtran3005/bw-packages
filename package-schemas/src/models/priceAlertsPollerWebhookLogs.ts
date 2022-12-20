import { Document, Schema } from 'mongoose';

export interface PriceAlertsPollerWebhookLog {
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers: any;
  ipAddress?: string;
}

export type PriceAlertsPollerWebhookLogsDoc = Document &
  PriceAlertsPollerWebhookLog;

const priceAlertsPollerWebhookLogShape = {
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

export const priceAlertsPollerWebhookLogSchema: Schema = new Schema(
  priceAlertsPollerWebhookLogShape,
  { timestamps: true, collection: 'price-alerts-poller-webhook-logs' }
);
