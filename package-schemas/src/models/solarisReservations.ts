import { Document, Schema } from 'mongoose';

import {
  MoneyAmount,
  Reservation,
  ReservationType,
} from '@bitwala-cryptobank-squad/package-solaris';

import { moneyAmountSchema, MoneyAmountSubdoc } from './moneyAmount';

export interface SolarisReservationInput extends Reservation {
  owner: string;
  amount: MoneyAmount;
}

export interface SolarisReservationDoc
  extends SolarisReservationInput,
    Document {
  amount: MoneyAmountSubdoc;
  createdAt: Date;
}

export const solarisReservationSchema: Schema = new Schema(
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
    amount: {
      type: moneyAmountSchema,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    reservationType: {
      type: String,
      enum: Object.values(ReservationType),
      required: true,
    },
    reference: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: true,
    },
    metaInfo: {
      type: String,
      required: false,
    },
    expiresAt: {
      type: Date,
      required: false,
    },
    expiredAt: {
      type: Date,
      required: false,
    },
    resolvedAt: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true, collection: 'solaris-reservations' }
);
