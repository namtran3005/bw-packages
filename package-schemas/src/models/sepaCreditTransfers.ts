import { Document, Schema } from 'mongoose';

import {
  SepaCreditTransfer,
  SepaCreditTransferStatus,
} from '@bitwala-cryptobank-squad/package-solaris';

import { moneyAmountSchema, MoneyAmountSubdoc } from './moneyAmount';

export interface SepaCreditTransferDoc extends Document, SepaCreditTransfer {
  owner: string;
  amount: MoneyAmountSubdoc;
  createdAt: Date;
}

export const sepaCreditTransferSchema: Schema = new Schema(
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
    status: {
      type: String,
      required: true,
      index: true,
      enum: Object.values(SepaCreditTransferStatus),
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
      required: true,
    },
    recipientIban: {
      type: String,
      required: true,
    },
    recipientBic: {
      type: String,
      required: true,
    },
    endToEndId: {
      type: String,
      required: true,
      index: true,
    },
  },
  { timestamps: true, collection: 'sepa-credit-transfers' }
);
