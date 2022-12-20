import { Document, Schema } from 'mongoose';
import { numberToString } from '../utils/index';

export enum PayoutStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
}

export interface PayoutInput {
  owner: string;
  status: PayoutStatus;
  amount: number;
  campaignId: string;
  campaignName: string;
  rulesetId: string;
  processedAt?: Date;
  referralCounterpart?: string;
  isAdvocate?: boolean;
}

export interface PayoutDoc extends Document, PayoutInput {
  createdAt: Date;
  updatedAt: Date;
}

export const payoutsSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    },
    status: {
      type: String,
      enum: Object.values(PayoutStatus),
      required: true,
      default: PayoutStatus.PENDING,
    },
    amount: {
      type: String,
      required: true,
      get: numberToString,
      set: numberToString,
    },
    campaignId: {
      type: String,
      required: true,
    },
    campaignName: {
      type: String,
      required: true,
    },
    rulesetId: {
      type: String,
      required: true,
    },
    referralCounterpart: {
      type: String,
      required: false,
    },
    isAdvocate: {
      type: Boolean,
      required: false,
    },
    processedAt: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true, collection: 'payouts' }
);
