import { Document, Schema } from 'mongoose';

import {
  StandingOrder,
  StandingOrderStatus,
  Reoccurrence,
  StandingOrderBookingType,
  StandingOrderTransactionType,
} from '@bitwala-cryptobank-squad/package-solaris';

import { moneyAmountSchema, MoneyAmountSubdoc } from './moneyAmount';

export enum WalletTypes {
  VAULT = 'VAULT',
  CUSTODY = 'CUSTODY',
}

export interface StandingOrderDoc
  extends Document,
    Omit<StandingOrder, 'nextOccurrence'> {
  owner: string;
  amount: MoneyAmountSubdoc;
  createdAt: Date;
  nextOccurrence?: Date;
  id: string;
  deletedAt?: Date;
  previousRuleIds?: string[];
  walletType?: WalletTypes;
  bookingType?: StandingOrderBookingType;
  transactionType?: StandingOrderTransactionType;
}

export const standingOrderSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    },
    solarisId: {
      type: String,
      required: true,
      index: true,
    },
    nextOccurrence: {
      type: Date,
      required: false,
      index: true,
    },
    status: {
      type: String,
      required: true,
      index: true,
      enum: Object.values(StandingOrderStatus),
    },
    reference: {
      type: String,
      required: true,
      index: true,
    },
    amount: {
      type: moneyAmountSchema,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    recipientName: {
      type: String,
      //Required for standard standing orders (not required for AutoBuy standing orders),
      //the discrepancy is handled by real time validation with yup in the StandingOrdersHandler -> create()
      required: false,
    },
    recipientIban: {
      type: String,
      //Required for standard standing orders (not required for AutoBuy standing orders),
      //the discrepancy is handled by real time validation with yup in the StandingOrdersHandler -> create()
      required: false,
    },
    recipientBic: {
      type: String,
      //Required for standard standing orders (not required for AutoBuy standing orders),
      //the discrepancy is handled by real time validation with yup in the StandingOrdersHandler -> create()
      required: false,
    },
    endToEndId: {
      type: String,
      required: false,
      index: true,
    },
    firstExecutionDate: {
      type: Date,
      required: true,
    },
    lastExecutionDate: {
      type: Date,
      //Required for standard standing orders (not required for AutoBuy standing orders),
      //the discrepancy is handled by real time validation with yup in the StandingOrdersHandler -> create()
      required: false,
    },
    reoccurrence: {
      type: String,
      required: true,
      enum: Object.values(Reoccurrence),
    },
    transactionType: {
      type: String,
      required: false,
      index: true,
      enum: Object.values(StandingOrderTransactionType),
    },
    bookingType: {
      type: String,
      required: false,
      index: true,
      enum: Object.values(StandingOrderBookingType),
    },
    clearingProfileId: {
      type: String,
      required: false,
    },
    deletedAt: {
      type: Date,
      required: false,
    },
    previousRuleIds: {
      type: [String],
      required: false,
    },
    walletType: {
      type: String,
      required: false,
      enum: Object.values(WalletTypes),
    },
    monthEndExecution: {
      type: Boolean,
    },
    lastLambdaExecutionDate: {
      // used for autobuy standing orders - the date until which iterations will be repeated
      type: Date,
      required: false,
      index: true,
    },
  },
  { timestamps: true, collection: 'standing-orders' }
);
