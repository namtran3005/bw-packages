import { Document, Schema } from 'mongoose';

export enum ApprovalMethodType {
  AUTHY_PUSH = 'AUTHY_PUSH',
  SMS = 'SMS',
  DSA_ED25519 = 'DSA_ED25519',
}

export enum ApprovalMethodState {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export interface SdaApprovalMethod {
  owner: string;
  solarisId: string;
  entityId: string;
  type: ApprovalMethodType;
  state: ApprovalMethodState;
}

export interface SdaApprovalMethodDoc extends SdaApprovalMethod, Document {
  createdAt: Date;
}

export const sdaApprovalMethodSchema: Schema = new Schema(
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
    entityId: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, collection: 'sda-approval-methods' }
);
