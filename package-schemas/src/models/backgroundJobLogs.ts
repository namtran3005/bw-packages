import { Document, Schema } from 'mongoose';

export enum BackgroundJobLogEvent {
  // Vault
  ABUY_ORDER_BTC_VAULT_EXEC_OK = 'ABUY_ORDER_BTC_VAULT_EXEC_OK',
  ABUY_ORDER_BTC_VAULT_EXEC_FAILED = 'ABUY_ORDER_BTC_VAULT_EXEC_FAILED',
  ABUY_ORDER_ETH_VAULT_EXEC_OK = 'ABUY_ORDER_ETH_VAULT_EXEC_OK',
  ABUY_ORDER_ETH_VAULT_EXEC_FAILED = 'ABUY_ORDER_ETH_VAULT_EXEC_FAILED',
  // Custody
  ABUY_ORDER_BTC_CUSTODY_EXEC_OK = 'ABUY_ORDER_BTC_CUSTODY_EXEC_OK',
  ABUY_ORDER_BTC_CUSTODY_EXEC_FAILED = 'ABUY_ORDER_BTC_CUSTODY_EXEC_FAILED',
  ABUY_ORDER_ETH_CUSTODY_EXEC_OK = 'ABUY_ORDER_ETH_CUSTODY_EXEC_OK',
  ABUY_ORDER_ETH_CUSTODY_EXEC_FAILED = 'ABUY_ORDER_ETH_CUSTODY_EXEC_FAILED',
}

export enum BackgroundJobLogCallerModule {
  AUTOBUY_NOTIFIER_LAMBDA = 'AUTOBUY_NOTIFIER_LAMBDA',
}

//the log domain corresponds to a mongodb collection name which supports background job logs
export enum BackgroundJobLogDomain {
  AUTOBUY_LOG_DOMAIN = 'standing-order',
}

export interface BackgroundJobLog {
  callerModule: BackgroundJobLogCallerModule;
  event: BackgroundJobLogEvent;
  status?: string;
  owner: string;
  domain: BackgroundJobLogDomain;
  itemId: string;
  anonymisedAt?: Date;
}

export type BackgroundJobLogDoc = Document & BackgroundJobLog;

export const backgroundJobLogsSchema: Schema = new Schema(
  {
    callerModule: {
      type: String,
      enum: Object.values(BackgroundJobLogCallerModule),
      required: true,
    },
    event: {
      type: String,
      enum: Object.values(BackgroundJobLogEvent),
      required: true,
    },
    status: {
      type: String,
    },
    owner: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true,
      enum: Object.values(BackgroundJobLogDomain),
    },
    itemId: {
      type: String,
      required: true,
    },
    anonymisedAt: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true, collection: 'background-job-logs' }
);
