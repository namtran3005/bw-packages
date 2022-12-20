import { Document, Schema } from 'mongoose';

export enum ClosureRequestReasons {
  CUSTOMER_WISH = 'CUSTOMER_WISH',
  COMPLIANCE_IMMEDIATE_INTERNAL = 'COMPLIANCE_IMMEDIATE_INTERNAL',
  ORDINARY_INTERNAL = 'ORDINARY_INTERNAL',
}
export enum ClosureRequestStates {
  APPROVED = 'APPROVED',
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export interface SdaAccountClosureRequest {
  owner: string;
  solarisId: string;
  entityId: string;
  reason: ClosureRequestReasons;
  state: ClosureRequestStates;
  validUntil: Date;
}

export interface SdaAccountClosureRequestDoc
  extends SdaAccountClosureRequest,
    Document {
  createdAt: Date;
  id: string;
}

export const sdaAccountClosureRequestSchema: Schema = new Schema(
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
    reason: {
      type: String,
      required: true,
      enum: Object.values(ClosureRequestReasons),
    },
    state: {
      type: String,
      required: true,
      enum: Object.values(ClosureRequestStates),
    },
    validUntil: {
      type: Date,
      required: true,
      index: true,
    },
  },
  { timestamps: true, collection: 'sda-account-closure-requests' }
);
