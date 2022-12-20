import { Document, Schema } from 'mongoose';

import {
  CardFraudCase,
  CardFraudCaseResolution,
  Countries,
} from '@bitwala-cryptobank-squad/package-solaris';
import { relaxedMoneyAmountSchema } from './moneyAmount';

export interface SolarisCardFraudCaseDoc extends Document, CardFraudCase {
  owner: string;
  createdAt: Date;
}

export const solarisMerchantSchema: Schema = new Schema(
  {
    countryCode: {
      type: String,
      enum: Object.values(Countries),
      required: true,
    },
    categoryCode: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
  }
);

export const solarisCardTransactionSchema: Schema = new Schema(
  {
    cardId: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
    status: {
      type: String,
    },
    attemptedAt: {
      type: Date,
      required: true,
    },
    posEntryMode: {
      type: String,
    },
    merchant: {
      type: solarisMerchantSchema,
      required: true,
    },
    amount: {
      type: relaxedMoneyAmountSchema,
      required: true,
    },
    originalAmount: {
      type: relaxedMoneyAmountSchema,
      required: true,
    },
  },
  { _id: false }
);

export const solarisCardFraudCaseSchema: Schema = new Schema(
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
    resolution: {
      type: String,
      enum: Object.values(CardFraudCaseResolution),
      required: true,
    },
    respondUntil: {
      type: Date,
      required: true,
    },
    whitelistedUntil: {
      type: Date,
      required: false,
    },
    cardTransaction: {
      type: solarisCardTransactionSchema,
      required: true,
    },
  },
  { timestamps: true, collection: 'solaris-card-fraud-cases' }
);
