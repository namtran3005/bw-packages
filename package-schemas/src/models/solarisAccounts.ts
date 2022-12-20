import { Document, Schema } from 'mongoose';

import {
  Account,
  AccountType,
  LockingStatus,
  LockingReason,
  AccountStatus,
} from '@bitwala-cryptobank-squad/package-solaris';

import { moneyAmountSchema } from './moneyAmount';

export interface SolarisAccountDoc extends Document, Account {
  owner: string;
  createdAt: Date;
  anonymisedAt?: Date;
}

const seizureProtectionSchema: Schema = new Schema(
  {
    currentBlockedAmount: {
      type: moneyAmountSchema,
      required: true,
    },
    protectedAmount: {
      type: moneyAmountSchema,
      required: false,
    },
    protectedAmountExpiring: {
      type: moneyAmountSchema,
      required: false,
    },
    protectedAmountExpiringDate: {
      type: String,
      required: false,
    },
  },
  {
    _id: false,
  }
);

export const solarisAccountSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    solarisId: {
      type: String,
      index: true,
      required: true,
    },
    iban: {
      type: String,
      required: true,
    },
    bic: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: Object.values(AccountType),
      required: true,
    },
    balance: {
      type: moneyAmountSchema,
      required: true,
      index: true,
    },
    availableBalance: {
      type: moneyAmountSchema,
      required: true,
    },
    lockingStatus: {
      type: String,
      enum: Object.values(LockingStatus),
      required: true,
    },
    lockingReasons: {
      type: [String],
      enum: Object.values(LockingReason),
      required: false,
    },
    accountLimit: {
      type: moneyAmountSchema,
      required: true,
    },
    personId: {
      type: String,
      index: true,
      required: true,
    },
    businessId: {
      type: String,
      index: true,
      required: false,
    },
    status: {
      type: String,
      index: true,
      enum: Object.values(AccountStatus),
      required: false,
    },
    closureReason: {
      type: String,
      // We do not enforce the enum validation here as solaris is often introducing new items
      // and is not notifying us nor the documentation is updated.
      // See https://docs.solarisbank.com/core/api/v1/#62dLy4C4-closure_reason.
      required: false,
    },
    anonymisedAt: {
      type: Date,
      required: false,
    },
    seizureProtection: {
      type: seizureProtectionSchema,
      required: false,
    },
  },
  { timestamps: true, collection: 'solaris-accounts' }
);

solarisAccountSchema.index({
  'balance.value': 1,
});
