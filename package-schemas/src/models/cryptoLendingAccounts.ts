import { Document, Schema } from 'mongoose';

export enum CryptoLendingKycStatus {
  'REJECTED' = 'REJECTED',
  'PASSED' = 'PASSED',
  'PENDING' = 'PENDING',
}

export enum CryptoLendingAccountStatus {
  Pending = 'PENDING',
  Active = 'ACTIVE',
  Rejected = 'REJECTED',
  Frozen = 'FROZEN',
  Closed = 'CLOSED',
}

export enum CelsiusTermsAndConditionsStatus {
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED',
}

export enum SyncCelsiusEmailStatus {
  NOT_TRIED = 'NOT_TRIED',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}

type Currency = 'BTC';

export interface CryptoLendingBalance {
  currency: Currency;
  amount: string;
  spendableAmount: string;
}
export interface CryptoLendingInterestBalance {
  currency: Currency;
  amount: string;
}

export interface CelsiusTermsAndConditions {
  status: CelsiusTermsAndConditionsStatus;
  updatedAt: Date;
}

export interface CryptoLendingAccount {
  owner: string;
  balances: CryptoLendingBalance[];
  interestBalances: CryptoLendingInterestBalance[];
  userSecret: string;
  kycStatus: CryptoLendingKycStatus;
  accountStatus: CryptoLendingAccountStatus;
  celsiusTermsAndConditions: CelsiusTermsAndConditions;
}

export type CryptoLendingAccountDoc = CryptoLendingAccount &
  Document & { createdAt: Date; updatedAt: Date };

const balanceSchema = new Schema(
  {
    currency: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    spendableAmount: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);
const interestBalanceSchema = new Schema(
  {
    currency: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const termsAndConditionsSchema = new Schema(
  {
    status: {
      type: String,
      required: true,
      enum: Object.values(CelsiusTermsAndConditionsStatus),
    },
    updatedAt: {
      type: Date,
      required: true,
    },
  },
  { _id: false }
);

export const cryptoLendingAccountSchema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    balances: {
      type: [balanceSchema],
      required: true,
      default: undefined,
    },
    interestBalances: {
      type: [interestBalanceSchema],
      required: true,
      default: undefined,
    },
    celsiusTermsAndConditions: {
      type: termsAndConditionsSchema,
      required: true,
    },
    userSecret: { type: String, required: true },
    kycStatus: {
      type: String,
      required: true,
      index: true,
      enum: Object.values(CryptoLendingKycStatus),
    },
    accountStatus: {
      type: String,
      enum: Object.values(CryptoLendingAccountStatus),
    },
    syncedCelsiusEmail: {
      type: String,
      enum: Object.values(SyncCelsiusEmailStatus),
    },
  },
  { collection: 'crypto-lending-accounts', timestamps: true }
);

cryptoLendingAccountSchema.index({ createdAt: 1 });
