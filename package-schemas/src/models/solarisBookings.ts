import { Document, Schema, SchemaTypes } from 'mongoose';

import {
  Booking,
  MoneyAmount,
} from '@bitwala-cryptobank-squad/package-solaris';

import { moneyAmountSchema, MoneyAmountSubdoc } from './moneyAmount';

// We make valuta date optional since the field was not stored
// to the database for old bookings.
type BookingOptionalValutaDate = Omit<Booking, 'valutaDate'> &
  Partial<Pick<Booking, 'valutaDate'>>;

export interface SolarisBookingInput extends BookingOptionalValutaDate {
  owner: string;
  amount: MoneyAmount;
}

export interface SolarisBookingDoc extends SolarisBookingInput, Document {
  amount: MoneyAmountSubdoc;
  createdAt: Date;
}

export const solarisBookingSchema: Schema = new Schema(
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
    accountId: {
      type: String,
      required: false,
      index: true,
    },
    creationDate: {
      type: Date,
      required: true,
    },
    valutaDate: {
      type: Date,
      required: false,
    },
    bookingDate: {
      type: Date,
      required: true,
    },
    bookingType: {
      type: String,
      required: true,
    },
    amount: {
      type: moneyAmountSchema,
      required: true,
    },
    description: {
      type: String,
      required: false,
      sparse: true,
    },
    recipientBic: {
      type: String,
      required: false,
    },
    recipientIban: {
      type: String,
      required: false,
    },
    recipientName: {
      type: String,
      required: false,
    },
    senderBic: {
      type: String,
      required: false,
    },
    senderIban: {
      type: String,
      required: false,
    },
    senderName: {
      type: String,
      required: false,
    },
    endToEndId: {
      type: String,
      required: false,
    },
    creditorIdentifier: {
      type: String,
      required: false,
    },
    mandateReference: {
      type: String,
      required: false,
    },
    transactionId: {
      type: String,
      required: false,
      index: true,
    },
    returnTransactionId: {
      type: String,
      required: false,
      index: true,
    },
    sepaReturnCode: {
      type: String,
      required: false,
    },
    sepaReturnReason: {
      type: String,
      required: false,
    },
    sepaReturnReasonDefinition: {
      type: String,
      required: false,
    },
    metaInfo: {
      type: SchemaTypes.Mixed,
      required: false,
    },
    recordedAt: {
      type: Date,
      required: false,
    },
    reconciliationId: {
      type: String,
      required: false,
    },
  },
  { timestamps: true, collection: 'solaris-bookings' }
);
