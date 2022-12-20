import { Document, Schema } from 'mongoose';

import {
  Currencies,
  ReservationType,
} from '@bitwala-cryptobank-squad/package-solaris';
import {
  Unit as MoneyUnit,
  BitwalaCategories,
  TransactionStatus,
} from '@bitwala-cryptobank-squad/package-utils';
import { TransactionType as SdaTransactionType } from '@bitwala-markets-squad/sda-sdk';
import { numberToString } from '../utils/index';
import { CryptoSettlementType } from './orders';
import { CryptoLendingTransactionType } from './cryptoLendingTransactions';

export { TransactionStatus };

// almost the same as solaris money type, but extended with crypto units for crypto txns
export interface TransactionAmount {
  value: string;
  unit: MoneyUnit;
  currency: Currencies;
}

export enum TransactionAreas {
  SOLARIS_BOOKING = 'SOLARIS_BOOKING',
  SOLARIS_RESERVATION = 'SOLARIS_RESERVATION',
  CRYPTO_TRANSACTION = 'CRYPTO_TRANSACTION',
  TRADE = 'TRADE',
  CRYPTO_LENDING = 'CRYPTO_LENDING',
  SDA_TRANSACTION = 'SDA_TRANSACTION',
  ETF = 'ETF',
}

export enum GiftTypes {
  REFERRAL_PAYMENT = 'REFERRAL_PAYMENT',
  PROMO_PAYOUT = 'PROMO_PAYOUT',
}

export enum TransactionType {
  AUTOBUY_TRADE = 'AUTOBUY_TRADE',
}

export enum EtfAssetSymbol {
  FGP = 'FGP',
  PFT = 'PFT',
  PVP = 'PVP',
}

export interface TransactionAmountSubdoc extends Document, TransactionAmount {}

export interface TransactionInput {
  domain: string;
  area: TransactionAreas;
  itemId: string;
  primaryAmount: TransactionAmount;
  secondaryAmount?: TransactionAmount;
  owner: string;
  status: TransactionStatus;
  transactionTime: Date;
  transactionType?: TransactionType;
  meta:
    | SolarisBookingMeta
    | SolarisReservationMeta
    | CryptoTransactionMeta
    | CryptoLendingTransactionMeta
    | TradeMeta
    | SdaTransactionMeta
    | EtfTransactionMeta;
}

export interface TransactionInputCryptoLendingDeposit extends TransactionInput {
  domain: string;
  area: TransactionAreas.CRYPTO_LENDING;
  itemId: string;
  primaryAmount: TransactionAmount;
  secondaryAmount: TransactionAmount;
  owner: string;
  status: TransactionStatus;
  transactionTime: Date;
  meta: {
    cryptoLendingTxType: CryptoLendingTransactionType.DEPOSIT;
  };
}

export interface SolarisBookingMeta {
  solarisBookingType: string;
  senderName?: string;
  recipientName?: string | null;
  txnBitwalaCategory?: BitwalaCategories;
  giftType?: GiftTypes;
  endToEndId?: string;
}

export interface SolarisReservationMeta {
  solarisReservationType: ReservationType;
  txnBitwalaCategory?: BitwalaCategories;
  recipientName?: string | null;
  traceId?: string;
}

// Leaving these as placeholders
export interface CryptoTransactionMeta {
  address?: string;
  giftType?: GiftTypes;
}

export interface CryptoLendingTransactionMeta {
  cryptoLendingTxType: CryptoLendingTransactionType;
}

export interface TradeMeta {
  cryptoSettlementType?: CryptoSettlementType;
  autoBuyRuleId?: string;
}

export interface SdaTransactionMeta {
  sdaTransactionType: SdaTransactionType;
  address?: string;
  giftType?: GiftTypes;
}

export interface EtfTransactionMeta {
  etfOrder: EtfOrder;
}

export interface EtfOrder {
  etfAssetSymbol: EtfAssetSymbol;
}

export interface TransactionDoc extends Document, TransactionInput {
  id: string;
  createdAt: string;
  deletedAt?: Date;
  updatedAt?: string;
  owner: string;
  transactionType?: TransactionType;
}

export const transactionAmountSchema: Schema = new Schema(
  {
    value: {
      type: String,
      required: true,
      get: numberToString,
      set: numberToString,
    },
    currency: {
      type: String,
      required: true,
      enum: Object.values(Currencies),
    },
    unit: {
      type: String,
      required: true,
      enum: Object.values(MoneyUnit),
    },
  },
  { _id: false }
);

export const etfOrderSchema: Schema = new Schema(
  {
    etfAssetSymbol: {
      type: String,
      enum: Object.values(EtfAssetSymbol),
      required: true,
    },
  },
  { _id: false }
);

export const transactionMetaSchema: Schema = new Schema(
  {
    solarisBookingType: {
      type: String,
      required: false,
    },
    solarisReservationType: {
      type: String,
      enum: Object.values(ReservationType),
      required: false,
    },
    senderName: {
      type: String,
      required: false,
    },
    recipientName: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    txnBitwalaCategory: {
      type: String,
      required: false,
    },
    traceId: {
      type: String,
      required: false,
    },
    giftType: {
      type: String,
      enum: Object.values(GiftTypes),
      required: false,
    },
    cryptoSettlementType: {
      type: String,
      enum: Object.values(CryptoSettlementType),
      required: false,
      index: true,
    },
    autoBuyRuleId: {
      type: String,
      required: false,
    },
    cryptoLendingTxType: {
      type: String,
      enum: Object.values(CryptoLendingTransactionType),
      required: false,
      index: true,
    },
    sdaTransactionType: {
      type: String,
      enum: Object.values(SdaTransactionType),
      required: false,
      index: true,
    },
    endToEndId: {
      type: String,
      required: false,
      index: true,
    },
    etfOrder: {
      type: etfOrderSchema,
      required: false,
    },
  },
  { _id: false }
);

export const transactionSchema: Schema = new Schema(
  {
    domain: {
      type: String,
      required: true,
      index: true,
    },
    area: {
      type: String,
      enum: Object.values(TransactionAreas),
      index: true,
    },
    status: {
      type: String,
      required: true,
      enum: Object.values(TransactionStatus),
      default: TransactionStatus.PENDING,
      index: true,
    },
    itemId: {
      type: String,
      required: true,
      index: true,
    },
    primaryAmount: {
      type: transactionAmountSchema,
      required: true,
    },
    secondaryAmount: {
      type: transactionAmountSchema,
      required: false,
    },
    owner: {
      type: String,
      required: true,
      index: true,
    },
    transactionType: {
      type: String,
      required: false,
      enum: Object.values(TransactionType),
      index: true,
    },
    meta: {
      type: transactionMetaSchema,
      required: true,
    },
    deletedAt: {
      type: Date,
      required: false,
      index: true,
    },
    transactionTime: {
      type: Date,
      required: true,
      index: true,
    },
  },
  { timestamps: true, collection: 'transactions' }
);
