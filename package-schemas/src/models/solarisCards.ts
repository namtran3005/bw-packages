import { Document, Schema } from 'mongoose';

import {
  Card,
  CardType,
  CardStatus,
  CardLimits,
} from '@bitwala-cryptobank-squad/package-solaris';

import { solarisCardRepresentationSchema } from './solarisCardRepresentations';

export enum ReorderReason {
  CARD_WAS_STOLEN = 'CARD_WAS_STOLEN',
  CARD_IS_LOST = 'CARD_IS_LOST',
  CARD_IS_BROKEN = 'CARD_IS_BROKEN',
}

export interface SolarisCardDoc extends Document, Card {
  owner: string;
  createdAt: Date;
  meta?: SolarisCardMeta;
  limits?: CardLimits;
  deletedAt?: Date;
}

export interface SolarisCardMeta {
  canUserUnblock?: boolean;
  isReordered?: boolean;
  reorderDetails?: SolarisCardReorderDetails;
}

export interface SolarisCardReorderDetails {
  cardStatus: CardStatus;
  canUserUnblock: boolean;
  reason?: ReorderReason;
}

export const reorderDetailsSchema: Schema = new Schema(
  {
    cardStatus: {
      type: String,
      enum: Object.values(CardStatus),
      required: true,
    },
    canUserUnblock: {
      type: Boolean,
      required: true,
    },
    reason: {
      type: String,
      enum: Object.values(ReorderReason),
      required: false,
    },
  },
  { _id: false }
);

export const solarisCardMetaSchema: Schema = new Schema(
  {
    canUserUnblock: {
      type: Boolean,
      required: false,
    },
    isReordered: {
      type: Boolean,
      required: false,
    },
    reorderDetails: {
      type: reorderDetailsSchema,
      required: false,
    },
  },
  { _id: false }
);

export const solarisCardLimitsItemSchema: Schema = new Schema(
  {
    maxAmountCents: {
      type: Number,
      required: true,
    },
    maxTransactions: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

export const solarisCardLimitsDescriptorSchema: Schema = new Schema(
  {
    daily: {
      type: solarisCardLimitsItemSchema,
      required: true,
    },
    monthly: {
      type: solarisCardLimitsItemSchema,
      required: true,
    },
  },
  { _id: false }
);

export const solarisCardLimitsSchema: Schema = new Schema(
  {
    cardPresent: {
      type: solarisCardLimitsDescriptorSchema,
      required: false,
    },
    cardNotPresent: {
      type: solarisCardLimitsDescriptorSchema,
      required: false,
    },
  },
  { _id: false }
);

export const solarisCardSchema: Schema = new Schema(
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
    type: {
      type: String,
      enum: Object.values(CardType),
      required: false,
    },
    status: {
      type: String,
      enum: Object.values(CardStatus),
      required: true,
    },
    reference: {
      type: String,
      required: false,
    },
    expirationDate: {
      type: Date,
      required: false,
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
    representation: {
      type: solarisCardRepresentationSchema,
      required: false,
    },
    meta: {
      type: solarisCardMetaSchema,
      required: false,
    },
    limits: {
      type: solarisCardLimitsSchema,
      required: false,
    },
    deletedAt: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true, collection: 'solaris-cards' }
);
