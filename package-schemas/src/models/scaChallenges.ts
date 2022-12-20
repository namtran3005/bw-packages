import { Document, Schema } from 'mongoose';

export enum ScaChallengeAmountUnit {
  cents = 'cents',
}

export interface ScaChallengeAmount {
  value: string;
  unit: ScaChallengeAmountUnit;
  currency: string;
}

export interface ScaChallengeMerchant {
  name: string;
  country: string;
  url: string;
}

export interface ScaChallenge {
  owner: string;
  amount: ScaChallengeAmount;
  merchant: ScaChallengeMerchant;
  challengedAt: Date;
  expiresAt: Date;
  declineChangeRequestId: string;
  channel: string;
  cardId: string;
  personId: string;
  authenticateChangeRequestId: string;
}

export interface ScaChallengeDoc extends ScaChallenge, Document {
  createdAt: Date;
  id: string;
  changeRequestInitiatedAt?: Date;
}

export const amountSchema: Schema = new Schema(
  {
    value: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      enum: Object.values(ScaChallengeAmountUnit),
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

export const merchantSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

export const scaChallengeSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    },
    amount: {
      type: amountSchema,
      required: true,
    },
    merchant: {
      type: merchantSchema,
      required: true,
    },
    challengedAt: {
      type: Date,
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
    declineChangeRequestId: {
      type: String,
      required: true,
    },
    channel: {
      type: String,
      required: true,
    },
    cardId: {
      type: String,
      required: true,
      index: true,
    },
    authenticateChangeRequestId: {
      type: String,
      required: true,
    },
    changeRequestInitiatedAt: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true, collection: 'sca-challenges' }
);
