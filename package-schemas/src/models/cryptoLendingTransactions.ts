import { Document, Schema } from 'mongoose';
import { Currencies, TransactionStatus } from '@bitwala-cryptobank-squad/package-utils';

export interface CryptoLendingSDADeposit extends CryptoLendingTransaction {
  owner: string;
  amount: string;
  currency: Currencies.BTC;
  txId?: string;
  depositAddress: string;
  type: CryptoLendingTransactionType.DEPOSIT;
  status: TransactionStatus;
  cryptoWalletProvider: CryptoWalletProvider.SDA;
  sdaTxSolarisId: string;
}

export interface CryptoLendingBitgoDeposit extends CryptoLendingTransaction {
  owner: string;
  amount: string;
  currency: Currencies.BTC;
  txId: string;
  depositAddress: string;
  type: CryptoLendingTransactionType.DEPOSIT;
  status: TransactionStatus;
  cryptoWalletProvider?: CryptoWalletProvider.BITWALA;
}

export interface CryptoLendingDeposit extends CryptoLendingTransaction {
  txId: string;
  type: CryptoLendingTransactionType.DEPOSIT;
  depositAddress: string;
}

export interface CryptoLendingWithdrawal extends CryptoLendingTransaction {
  withdrawalId: string;
  withdrawalAddress: string;
  type: CryptoLendingTransactionType.WITHDRAWAL;
}

export interface CryptoLendingInterest
  extends Exclude<
    CryptoLendingTransaction,
    'depositAddress' | 'withdrawalId' | 'withdrawalAddress'
  > {
  type: CryptoLendingTransactionType.INTEREST;
  celsiusCreatedAt: Date;
}

export enum CryptoLendingTransactionType {
  DEPOSIT = 'deposit',
  WITHDRAWAL = 'withdrawal',
  INTEREST = 'interest',
}

export enum CryptoWalletProvider {
  BITWALA = 'Bitwala',
  SDA = 'SDA',
}
export interface CryptoLendingTransaction {
  owner: string;
  amount: string;
  currency: Currencies.BTC;
  txId?: string;
  withdrawalId?: string;
  depositAddress?: string;
  withdrawalAddress?: string;
  type: CryptoLendingTransactionType;
  status: TransactionStatus;
  celsiusCreatedAt?: Date;
  cryptoWalletProvider?: CryptoWalletProvider;
  sdaTxSolarisId?: string;
}

type Doc = Document & { createdAt: Date; updatedAt: Date };

export type CryptoLendingTransactionDoc = CryptoLendingTransaction & Doc;
export type CryptoLendingDepositDoc = CryptoLendingDeposit & Doc;
export type CryptoLendingSDADepositDoc = CryptoLendingSDADeposit & Doc;
export type CryptoLendingBitgoDepositDoc = CryptoLendingBitgoDeposit & Doc;
export type CryptoLendingWithdrawalDoc = CryptoLendingWithdrawal & Doc;
export type CryptoLendingInterestDoc = CryptoLendingInterest & Doc;

export const cryptoLendingTransactionSchema = new Schema<CryptoLendingTransaction>(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    },
    amount: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
      enum: [Currencies.BTC],
    },
    txId: {
      type: String,
      required(this: CryptoLendingTransaction) {
        if (!this.status || !this.type) {
          return true;
        }
        return (
          this.status === TransactionStatus.COMPLETE &&
          [
            CryptoLendingTransactionType.DEPOSIT,
            CryptoLendingTransactionType.WITHDRAWAL,
          ].includes(this.type)
        );
      },
    },
    // celsius response to withdrawal request
    withdrawalId: {
      type: String,
      required(this: CryptoLendingTransaction) {
        if (!this.type) {
          return true;
        }
        return this.type === CryptoLendingTransactionType.WITHDRAWAL;
      },
    },
    depositAddress: {
      type: String,
      required(this: CryptoLendingTransaction) {
        return this.type === CryptoLendingTransactionType.DEPOSIT;
      },
    },
    withdrawalAddress: {
      type: String,
      required(this: CryptoLendingTransaction) {
        if (!this.type) {
          return true;
        }
        return this.type === CryptoLendingTransactionType.WITHDRAWAL;
      },
    },
    type: {
      type: String,
      required: true,
      enum: Object.values(CryptoLendingTransactionType),
    },
    status: {
      type: String,
      required: true,
      enum: Object.values(TransactionStatus),
    },
    celsiusCreatedAt: {
      type: Date,
      required(this: CryptoLendingTransaction) {
        if (!this.type) {
          return true;
        }
        return this.type === CryptoLendingTransactionType.INTEREST;
      },
    },
    cryptoWalletProvider: {
      type: String,
      enum: [CryptoWalletProvider.BITWALA, CryptoWalletProvider.SDA],
    },
    sdaTxSolarisId: {
      type: String,
      index: true,
    },
  },
  { collection: 'crypto-lending-transactions', timestamps: true }
);

cryptoLendingTransactionSchema.index({ createdAt: 1, withdrawalAddress: 1 });
