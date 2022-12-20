import { Document, Schema } from 'mongoose';

export interface BitgoEntry {
  address: string;
  value: number;
  isChange?: boolean;
  isPayGo?: boolean;
  wallet?: string;
}

export interface BitcoinTransaction {
  owner: string;
  bitgoId: string;
  walletId: string;
  coin: string;
  txId: string;
  value: number;
  eur?: number;
  fee: number;
  confirmations: number;
  state: string;
  entries: BitgoEntry[];
  reportId?: string;
  reportType?: string;
  cscore?: number;
  btcPriceInEur?: number;
  madeViaBitwala?: boolean;
}

export interface BitcoinTransactionDoc extends BitcoinTransaction, Document {
  createdAt: Date;
  id: string;
}

export const bitcoinTransactionEntrySchema: Schema = new Schema(
  {
    address: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    isChange: {
      type: Boolean,
      required: false,
    },
    isPayGo: {
      type: Boolean,
      required: false,
    },
    wallet: {
      type: String,
    },
  },
  { _id: false }
);

export const bitcoinTransactionSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    },
    bitgoId: {
      type: String,
      required: true,
    },
    walletId: {
      type: String,
      required: true,
    },
    coin: {
      type: String,
      required: true,
    },
    txId: {
      type: String,
      required: true,
    },
    confirmations: {
      type: Number,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    fee: {
      type: Number,
      required: true,
    },
    eur: {
      type: Number,
      required: false,
    },
    entries: [bitcoinTransactionEntrySchema],
    reportId: {
      type: String,
      required: false,
    },
    reportType: {
      type: String,
      required: false,
    },
    cscore: {
      type: Number,
      required: false,
    },
    btcPriceInEur: {
      type: Number,
      required: false,
    },
    // Unlike ETH was not always tracked.
    // No migration was made for init value to differentiate between 'unknown'
    madeViaBitwala: {
      type: Boolean,
      required: false,
      default: false,
      index: true,
    },
  },
  { timestamps: true, collection: 'bitcoin-transactions' }
);

bitcoinTransactionSchema.index({
  cscore: 1,
  state: 1,
});
