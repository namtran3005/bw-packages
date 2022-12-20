import { Document, Schema } from 'mongoose';

export interface GdprAudit {
  agent: string;
  owner: string;
  actionType: GdprAuditActionType;
  status: GdprAuditStatus;
  agentIpAddress: string;
  agentUserAgent: string;
  failReason: string | null;
  deleteReason: string | null;
}

export enum GdprAuditActionType {
  EXPORT = 'Export',
  DELETE = 'Delete',
}

export enum GdprAuditStatus {
  SUCCESS = 'SUCCESS',
  FAIL = 'FAIL',
}

export interface GdprAuditDoc extends Document, GdprAudit {}

export const gdprAuditSchema: Schema = new Schema(
  {
    agent: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    actionType: {
      type: String,
      enum: Object.values(GdprAuditActionType),
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(GdprAuditStatus),
      required: true,
    },
    failReason: {
      type: String,
    },
    agentIpAddress: {
      type: String,
      required: true,
    },
    agentUserAgent: {
      type: String,
      required: true,
    },
    deleteReason: {
      type: String,
    },
  },
  { timestamps: true, collection: 'gdpr-audit' }
);
