import { Document, Schema } from 'mongoose';

export enum EthCoin {
  ETH = 'eth',
  TETH = 'teth',
}

export enum DataProvider {
  Upvest = 'UPVEST',
  CryptoApis = 'CRYPTOAPIS',
}

export interface EthereumWalletInput {
  owner: string;
  coin: EthCoin;
  balance: string;
  spendableBalance: string;
  receiveAddresses: string[];
  devices: string[];
  softwareKey: string;
  cipherAlgorithm: string;
  initializationVector: string;
  tag: string;
  walletDerivationPath: string;
  deletedReason?: string;
  dataProvider: DataProvider;
}

export interface EthereumWalletDoc extends EthereumWalletInput, Document {
  createdAt: Date;
  deletedAt?: Date;
}

export const ethereumWalletSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    },
    coin: {
      type: String,
      required: true,
      index: true,
      enum: Object.values(EthCoin),
    },
    balance: {
      type: String,
      required: true,
      index: true,
    },
    spendableBalance: {
      type: String,
      required: true,
    },
    receiveAddresses: {
      type: [String],
      required: true,
      index: true,
    },
    devices: {
      type: [String],
      required: true,
    },
    softwareKey: {
      type: String,
      required: true,
    },
    cipherAlgorithm: {
      type: String,
      required: true,
    },
    initializationVector: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    walletDerivationPath: {
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
    dataProvider: {
      type: String,
      required: true,
      enum: Object.values(DataProvider),
    },
  },
  { timestamps: true, collection: 'ethereum-wallets' }
);
