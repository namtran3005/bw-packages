import { Document, Schema } from 'mongoose';
import { ApprovalMethodType } from './sdaApprovalMethods';

export enum ApprovalRequestState {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export interface SdaApprovalRequest {
  owner: string;
  solarisId: string;
  transactionId: string;
  type: ApprovalMethodType;
  state: ApprovalRequestState;
}

export interface SdaApprovalRequestDoc extends SdaApprovalRequest, Document {
  owner: string;
  solarisId: string;
  createdAt: Date;
  transactionId: string;
  type: ApprovalMethodType;
  state: ApprovalRequestState;
}

export const sdaApprovalRequestSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    },
    solarisId: {
      type: String,
      index: true,
      required: true,
    },
    transactionId: {
      type: String,
      index: true,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: Object.values(ApprovalMethodType),
    },
    state: {
      type: String,
      required: true,
      index: true,
      enum: Object.values(ApprovalRequestState),
    },
  },
  { timestamps: true, collection: 'sda-approval-requests' }
);
