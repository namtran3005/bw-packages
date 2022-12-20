import { Document, Schema } from 'mongoose';

export const bitcoinInvocesConfig = {
  statuses: {
    new: 'new',
    confirmed: 'confirmed',
  },
};

export interface BitcoinInvoiceDoc extends Document {
  id: string;
  depositAddres: string;
  psp: string;
  convertedAmount: number;
}

export const bitcoinInvoiceSchema: Schema = new Schema(
  {
    _id: {
      type: String,
    },
    depositAddress: {
      type: String,
    },
    psp: {
      type: String,
    },
    convertedAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: Object.values(bitcoinInvocesConfig.statuses),
    },
  },
  { timestamps: true, collection: 'bitcoin-invoices' }
);
