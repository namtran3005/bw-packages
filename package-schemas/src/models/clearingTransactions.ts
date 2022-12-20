import { Document, Schema } from 'mongoose';
import { MoneyAmount, BookingType } from '@bitwala-cryptobank-squad/package-solaris';
import { moneyAmountSchema } from './moneyAmount';

export interface ClearingTransaction {
  solarisId: string;
  status: string;
  accountId: string;
  accountIban: string;
  clearingAccountIban: string;
  amount: MoneyAmount;
  description: string;
  bookingType: BookingType;
  valutaDate: string;
  transactionType: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metaInfo?: any;
}

export type ClearingTransactionDoc = Document & ClearingTransaction;

export const clearingTransactionsSchema: Schema = new Schema(
  {
    solarisId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    accountId: {
      type: String,
      required: true,
    },
    accountIban: {
      type: String,
      required: true,
    },
    clearingAccountIban: {
      type: String,
      required: true,
    },
    amount: {
      type: moneyAmountSchema,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    bookingType: {
      type: String,
      required: true,
    },
    valutaDate: {
      type: String,
      required: true,
    },
    transactionType: {
      type: String,
      required: true,
    },
    metaInfo: {
      type: Schema.Types.Mixed,
      required: false,
    },
  },
  { timestamps: true, collection: 'clearing-transactions' }
);
