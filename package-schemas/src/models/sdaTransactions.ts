import { Document, Schema } from 'mongoose';
import { Currencies } from '@bitwala-cryptobank-squad/package-solaris';
import { TransactionType, TransactionState } from '@bitwala-markets-squad/sda-sdk';

export {
  TransactionType as SdaTransactionType,
  TransactionState as SdaTransactionState,
};

export interface SdaTransaction {
  owner: string;
  solarisId: string;
  entityId: string;
  accountId: string;
  type: TransactionType;
  state: TransactionState;
  amount: string;
  feeAmount: string;
  totalAmount?: string;
  currency: Currencies.BTC | Currencies.ETH;
  address?: string;
  blockchainTxId?: string | null;
  blockchainOutputNum?: number;
  senderAccountId?: string;
  recipientAccountId?: string;
  endToEndId?: string;
  cryptoPriceInEur?: number;
}

export interface SdaTransactionDoc extends SdaTransaction, Document {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export const sdaTransactionSchema: Schema = new Schema(
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
    entityId: {
      type: String,
      index: true,
      required: true,
    },
    accountId: {
      type: String,
      index: true,
      required: true,
    },
    type: {
      type: String,
      index: true,
      required: true,
    },
    state: {
      type: String,
      index: true,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    feeAmount: {
      type: String,
      required: true,
    },
    totalAmount: {
      type: String,
    },
    currency: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    blockchainTxId: {
      type: String,
    },
    blockchainOutputNum: {
      type: String,
    },
    senderAccountId: {
      type: String,
    },
    recipientAccountId: {
      type: String,
    },
    endToEndId: {
      type: String,
      index: true,
    },
    cryptoPriceInEur: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true, collection: 'sda-transactions' }
);

sdaTransactionSchema.index({ createdAt: 1 });
