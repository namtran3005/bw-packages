import { Document, Schema } from 'mongoose';

export interface SolarisWebhookLog {
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers: any;
  ipAddress?: string;
}

export type SolarisWebhookLogDoc = Document & SolarisWebhookLog;

const solarisWebhookLogShape = {
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

export const solarisWebhookLogSchema: Schema = new Schema(
  solarisWebhookLogShape,
  { timestamps: true, collection: 'solaris-webhook-logs' }
);

export const solarisPollingServiceWebhookLogSchema: Schema = new Schema(
  solarisWebhookLogShape,
  { timestamps: true, collection: 'solaris-polling-service-webhook-logs' }
);
