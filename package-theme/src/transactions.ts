/* eslint-disable @typescript-eslint/no-explicit-any */
import { Big } from 'big.js';
import { ColorsType } from './colors.deprecated';

export enum BitcoinTransactionType {
  BITCOIN_TRANSACTION_RECEIVED = 'BITCOIN_TRANSACTION_RECEIVED',
  BITCOIN_TRANSACTION_SENT = 'BITCOIN_TRANSACTION_SENT',
  BITCOIN_TRANSACTION_BOUGHT = 'BITCOIN_TRANSACTION_BOUGHT',
  BITCOIN_TRANSACTION_SOLD = 'BITCOIN_TRANSACTION_SOLD',
}

export enum EthereumTransactionType {
  ETHEREUM_TRANSACTION_RECEIVED = 'ETHEREUM_TRANSACTION_RECEIVED',
  ETHEREUM_TRANSACTION_SENT = 'ETHEREUM_TRANSACTION_SENT',
  ETHEREUM_TRANSACTION_BOUGHT = 'ETHEREUM_TRANSACTION_BOUGHT',
  ETHEREUM_TRANSACTION_SOLD = 'ETHEREUM_TRANSACTION_SOLD',
}

export enum CryptoLendingTransactionType {
  CRYPTO_LENDING_WITHDRAWAL = 'CRYPTO_LENDING_WITHDRAWAL',
  CRYPTO_LENDING_DEPOSIT = 'CRYPTO_LENDING_DEPOSIT',
  CRYPTO_LENDING_INTEREST = 'CRYPTO_LENDING_INTEREST',
}

export enum SdaTransactionType {
  SDA_TRANSACTION_RECEIVED = 'SDA_TRANSACTION_RECEIVED',
  SDA_TRANSACTION_SENT = 'SDA_TRANSACTION_SENT',
  SDA_TRANSACTION_BOUGHT = 'SDA_TRANSACTION_BOUGHT',
  SDA_TRANSACTION_SOLD = 'SDA_TRANSACTION_SOLD',
}

// Defined statically here due to import issues from the original location
// Should be used only for styling and perhaps translation purposes, not functional
export enum TransactionStatus {
  PENDING = 'pending',
  QUEUED = 'queued',
  COMPLETE = 'complete',
  FAILED = 'failed',
  RETURN = 'return',
  CANCEL = 'cancel',
  SCHEDULED = 'scheduled',
  UNKNOWN = 'unknown',
}

/* Transaction Status Text */

export interface TransactionStatusText {
  [key: string]: {
    [key: string]: string;
  };
}

export enum TransactionAreas {
  CRYPTO_TRANSACTION = 'CRYPTO_TRANSACTION',
  SOLARIS_BOOKING = 'SOLARIS_BOOKING',
  SOLARIS_RESERVATION = 'SOLARIS_RESERVATION',
  TRADE = 'TRADE',
  CRYPTO_LENDING = 'CRYPTO_LENDING',
  SDA_TRANSACTION = 'SDA_TRANSACTION',
  ETF = 'ETF',
}

export const transactionStatusText: TransactionStatusText = {
  [TransactionAreas.CRYPTO_TRANSACTION]: {
    pending: 'transactions.status.pending',
    failed: 'transactions.status.failed',
  },
  [TransactionAreas.TRADE]: {
    pending: 'transactions.status.pending',
    failed: 'transactions.status.failed',
  },
  [TransactionAreas.CRYPTO_LENDING]: {
    pending: 'transactions.status.pending',
    failed: 'transactions.status.failed',
  },
  [TransactionAreas.SDA_TRANSACTION]: {
    pending: 'transactions.status.pending',
    failed: 'transactions.status.failed',
  },
};

export const getTransactionStatusTranslationId = (transaction: {
  area: string;
  status: string;
}) => {
  if (!transactionStatusText[transaction.area]) {
    return;
  }
  return transactionStatusText[transaction.area][transaction.status];
};

/* Transaction Status Color */

export interface TransactionIconDotColors {
  [key: string]: {
    [key: string]: ColorsType;
  };
}

export const transactionIconDotColors: TransactionIconDotColors = {
  [TransactionAreas.SOLARIS_BOOKING]: {
    declined: 'warningRed',
    cancelled: 'warningRed',
    cancel: 'warningRed',
    returned: 'alertOrange',
    return: 'alertOrange',
  },
  [TransactionAreas.SOLARIS_RESERVATION]: {
    pending: 'secondaryAccent',
    failed: 'warningRed',
  },
  [TransactionAreas.CRYPTO_TRANSACTION]: {
    pending: 'secondaryAccent',
    failed: 'warningRed',
  },
  [TransactionAreas.TRADE]: {
    pending: 'secondaryAccent',
    failed: 'warningRed',
  },
  [TransactionAreas.CRYPTO_LENDING]: {
    pending: 'secondaryAccent',
    failed: 'warningRed',
  },
  [TransactionAreas.SDA_TRANSACTION]: {
    pending: 'secondaryAccent',
    failed: 'warningRed',
  },
};

export const getTransactionIconDotColor = (
  transactionDoc: any
): ColorsType | undefined => {
  const areaColors = transactionIconDotColors[transactionDoc.area as string];

  return areaColors[transactionDoc.status];
};

/* Amount Color */

export const getAmountForeground = (value: number | string): ColorsType => {
  return Big(value).gt(0) ? 'primarySuccess' : 'text';
};

export const getTradeAmountBackground = (value: number | string) => {
  return Big(value).gt(0) ? 'primarySuccess' : 'primaryGrey';
};

export const getTradeAmountForeground = (value: number | string) => {
  return Big(value).gt(0) ? 'whitestWhite' : 'primaryBlue';
};

export const getSecondaryAmountBackground = (value: number | string) => {
  return getTradeAmountBackground(value);
};

/* Amount Alpha */

export interface TransactionAmountAlpha {
  [key: string]: {
    [key: string]: number;
  };
}

export const primaryAmountAlpha: TransactionAmountAlpha = {
  [TransactionAreas.SOLARIS_BOOKING]: {
    declined: 0.5,
    cancelled: 0.5,
    cancel: 0.5,
    failed: 0.5,
  },
  [TransactionAreas.CRYPTO_TRANSACTION]: { pending: 0.5, failed: 0.5 },
  [TransactionAreas.SDA_TRANSACTION]: { pending: 0.5, failed: 0.5 },
  [TransactionAreas.TRADE]: { pending: 0.5, failed: 0.5 },
  [TransactionAreas.CRYPTO_LENDING]: { pending: 0.5, failed: 0.5 },
};

export const secondaryAmountAlpha: TransactionAmountAlpha = {
  [TransactionAreas.TRADE]: { failed: 0.5 },
};

export const primaryAmountBackgroundAlpha: TransactionAmountAlpha = {
  [TransactionAreas.SOLARIS_BOOKING]: { pending: 0.5, scheduled: 0.5 },
  [TransactionAreas.SOLARIS_RESERVATION]: { pending: 0.5 },
  [TransactionAreas.CRYPTO_TRANSACTION]: { pending: 0.5, scheduled: 0.5 },
  [TransactionAreas.SDA_TRANSACTION]: { pending: 0.5, scheduled: 0.5 },
  [TransactionAreas.TRADE]: { pending: 0.5, scheduled: 0.5 },
  [TransactionAreas.CRYPTO_LENDING]: { pending: 0.5, scheduled: 0.5 },
};

export const secondaryAmountBackgroundAlpha: TransactionAmountAlpha = {
  [TransactionAreas.SOLARIS_BOOKING]: { pending: 0.5, scheduled: 0.5 },
  [TransactionAreas.SOLARIS_RESERVATION]: { pending: 0.5 },
  [TransactionAreas.CRYPTO_TRANSACTION]: { pending: 0.5, scheduled: 0.5 },
  [TransactionAreas.SDA_TRANSACTION]: { pending: 0.5, scheduled: 0.5 },
  [TransactionAreas.TRADE]: { pending: 0.5, scheduled: 0.5 },
  [TransactionAreas.CRYPTO_LENDING]: { pending: 0.5, scheduled: 0.5 },
};

export const getAmountAlpha = (
  transactionAmountAlpha: TransactionAmountAlpha,
  area: TransactionAreas,
  status: TransactionStatus
) => {
  if (transactionAmountAlpha[area]) {
    const opacity = transactionAmountAlpha[area][status];

    if (opacity) {
      return opacity;
    }
  }
  return 1;
};

export const getPrimaryAmountBackgroundAlpha = (
  area: TransactionAreas,
  status: TransactionStatus
) => {
  return getAmountAlpha(primaryAmountBackgroundAlpha, area, status);
};

export const getSecondaryAmountBackgroundAlpha = (
  area: TransactionAreas,
  status: TransactionStatus
) => {
  return getAmountAlpha(secondaryAmountBackgroundAlpha, area, status);
};

export const getPrimaryAmountAlpha = (
  area: TransactionAreas,
  status: TransactionStatus
) => {
  return getAmountAlpha(primaryAmountAlpha, area, status);
};

export const getSecondaryAmountAlpha = (
  area: TransactionAreas,
  status: TransactionStatus
) => {
  return getAmountAlpha(secondaryAmountAlpha, area, status);
};
