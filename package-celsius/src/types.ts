import * as Celsius from 'celsius-sdk';
import {
  TransactionStatus,
  CryptoLendingKycStatus,
} from '@bitwala-cryptobank-squad/package-schemas';
import { Currencies } from '@bitwala-cryptobank-squad/package-utils';

export enum CelsiusTransactionState {
  PROCESSING = 'processing',
  UNCONFIRMED = 'unconfirmed',
  CONFIRMED = 'confirmed',
  REJECTED = 'rejected',
}

export const CelsiusTxStateToBitwalaStatus = {
  [CelsiusTransactionState.PROCESSING]: TransactionStatus.PENDING,
  [CelsiusTransactionState.UNCONFIRMED]: TransactionStatus.PENDING,
  [CelsiusTransactionState.CONFIRMED]: TransactionStatus.COMPLETE,
  [CelsiusTransactionState.REJECTED]: TransactionStatus.FAILED,
};

export interface BalanceSummaryResponse {
  balance: {
    eth: string;
    btc: string;
  };
}

export interface InterestSummaryResponse {
  interest: {
    [Currencies.ETH]: {
      amount: string;
    };
    [Currencies.BTC]: {
      amount: string;
    };
  };
}

// user sends kyc -> PENDING
// kyc started -> COMPLETED
// automated approve -> PASSED
// automated reject -> PENDING
// manual approve -> PASSED
// manual reject -> REJECTED
// manual reject final -> REJECTED
export const kycStatusMap = {
  PENDING: CryptoLendingKycStatus.PENDING,
  // User has submitted all the data needed for the KYC check to start
  // and they are now waiting for results
  COMPLETED: CryptoLendingKycStatus.PENDING,
  PASSED: CryptoLendingKycStatus.PASSED,
  // User can resubmit the kyc or can be re approved manually
  REJECTED: CryptoLendingKycStatus.REJECTED,
  // User can not resubmit the kyc, still can be re approved manually
  PERMANENTLY_REJECTED: CryptoLendingKycStatus.REJECTED,
};

export type BitwalaCelsiusKycData = Omit<
  Celsius.CelsiusKycUserData,
  'phone_number' | 'document_type'
>;

export type CelsiusWithdrawOptions = Celsius.CelsiusWithdrawOptions;

export interface GetInterestRatesResponse {
  interestRates: Array<Celsius.InterestRates['interestRates']>;
}

export type CelsiusPaginationInput = Celsius.CelsiusPagination & {
  page: number;
};
