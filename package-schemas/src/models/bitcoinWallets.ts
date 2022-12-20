import { Document, Schema } from 'mongoose';

export enum Coin {
  BTC = 'btc',
  TBTC = 'tbtc',
}

export interface BitcoinWalletInput {
  owner: string;
  bitgoId: string;
  coin: Coin;
  keys: string[];
  label: string;
  enterprise?: string;
  balance: number;
  confirmedBalance: number;
  deletedReason?: string;
  spendableBalance: number;
  balanceString: string;
  spendableBalanceString: string;
  confirmedBalanceString: string;
  receiveAddresses: string[];
  // backup of bitgo xpub
  bitgoXpub: string;
  anonymisedAt?: Date;
}

export interface BitcoinWalletDoc extends BitcoinWalletInput, Document {
  createdAt: Date;
  deletedAt?: Date;
}

export const bitcoinWalletSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    },
    bitgoId: {
      type: String,
      required: true,
      index: true,
    },
    coin: {
      type: String,
      required: true,
      index: true,
      enum: Object.values(Coin),
    },
    keys: {
      type: [String],
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    enterprise: {
      type: String,
      required: false,
    },
    balance: {
      type: Number,
      required: true,
      index: true,
    },
    spendableBalance: {
      type: Number,
      required: true,
    },
    confirmedBalance: {
      type: Number,
      required: true,
    },
    balanceString: {
      type: String,
      required: true,
      index: true,
    },
    spendableBalanceString: {
      type: String,
      required: true,
    },
    confirmedBalanceString: {
      type: String,
      required: true,
    },
    receiveAddresses: {
      type: [String],
      required: true,
    },
    bitgoXpub: {
      type: String,
      required: true,
    },
    deletedAt: {
      type: Date,
      required: false,
      index: true,
    },
    deletedReason: {
      type: String,
      required: false,
    },
    anonymisedAt: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true, collection: 'bitcoin-wallets' }
);
