import { Document, Schema } from 'mongoose';
import { UpvestErrorsReason } from '@bitwala-cryptobank-squad/package-upvest';

export interface EthereumTransaction {
  owner: string;
  walletId: string;
  coin: string;
  txId: string;
  confirmations: number;
  confirmedAt?: Date;
  value: string;
  eur?: number;
  gasPrice: string;
  gasLimit: number;
  gasUsed?: number;
  state: string;
  blockNumber?: number;
  blockHash?: string;
  transactionIndex?: number;
  to: string;
  from: string;
  nonce: number;
  input?: string;
  ethPriceInEur?: number;
  reportId?: string;
  reportType?: string;
  cscore?: number;
  madeViaBitwala?: boolean;
  error?: false | UpvestErrorsReason;
  isSynced?: boolean; // was transaction synchronized by webhook
}

export interface EthereumTransactionDoc extends EthereumTransaction, Document {
  createdAt: Date;
  id: string;
  madeViaBitwala: boolean;
}

export const ethereumTransactionSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    },
    walletId: {
      type: String,
      required: true,
      index: true,
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
    confirmedAt: {
      type: Date,
      required: false,
    },
    value: {
      type: String,
      required: true,
    },
    eur: {
      type: Number,
      required: false,
    },
    gasPrice: {
      type: String,
      required: true,
    },
    gasLimit: {
      type: Number,
      required: true,
    },
    gasUsed: {
      type: Number,
      required: false,
    },
    state: {
      type: String,
      required: true,
    },
    blockNumber: {
      type: Number,
      required: false,
    },
    blockHash: {
      type: String,
      required: false,
    },
    transactionIndex: {
      type: Number,
      required: false,
    },
    to: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    nonce: {
      type: Number,
      required: true,
    },
    input: {
      type: String,
      required: false,
      validate: {
        validator: (v: string) => {
          // must be valid hex
          return v.slice(0, 2) === '0x';
        },
        msg: `input must be valid hex!`,
      },
    },
    ethPriceInEur: {
      type: Number,
      required: false,
    },
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
    error: {
      type: Schema.Types.Mixed,
      required: false,
      index: true,
    },
    // Flag is set to true if the tx was made via bitwala platform
    madeViaBitwala: {
      type: Boolean,
      default: false,
      required: false,
      index: true,
    },
    isSynced: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true, collection: 'ethereum-transactions' }
);
