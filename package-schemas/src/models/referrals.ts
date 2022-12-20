import { Document, Schema } from 'mongoose';
import { MoneyAmount } from '@bitwala-cryptobank-squad/package-solaris';
import { moneyAmountSchema } from './moneyAmount';

export interface Referral {
  end_to_end: string;
  parentUserId: string | null;
  childUserId: string | null;
  completedAt: Date | null;
  parentPaidAt: Date | null;
  parentPaidAmount: MoneyAmount | null;
  childPaidAt: Date | null;
  childPaidAmount: MoneyAmount | null;
}

export type ReferralDoc = Document & Referral;

export const referralsSchema: Schema = new Schema(
  {
    // 10 characters combination created by Finance: first 5 characters of parent user + first 5 characters of child user
    end_to_end: {
      index: true,
      type: String,
      required: true,
      unique: true,
    },
    // ID of parent user
    parentUserId: {
      index: true,
      type: String,
    },
    // ID of child user
    childUserId: {
      index: true,
      type: String,
    },
    // UTC timestamp when user has completed referral conditions
    completedAt: {
      type: Date,
    },
    // UTC timestamp when bonus was paid to the parent user
    parentPaidAt: {
      type: Date,
    },
    // UTC timestamp when bonus was paid to the parent user
    parentPaidAmount: {
      type: moneyAmountSchema,
    },
    // UTC timestamp when bonus was paid to the parent user
    childPaidAt: {
      type: Date,
    },
    // UTC timestamp when bonus was paid to the parent user
    childPaidAmount: {
      type: moneyAmountSchema,
    },
  },
  { timestamps: true, collection: 'referrals' }
);
