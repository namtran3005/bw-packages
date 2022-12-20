import {
  TransactionStatus,
  CryptoLendingTransactionType,
} from '@bitwala-cryptobank-squad/package-schemas';
import { CryptoLendingTransactionModel } from '../model';

export interface SumOfLendingTxs {
  BTC: string;
}

const getSumOf = async (filter: {
  owner: string;
  status: TransactionStatus;
  type: CryptoLendingTransactionType;
  txId: object;
}): Promise<SumOfLendingTxs> => {
  const [res] = await CryptoLendingTransactionModel.aggregate([
    {
      $match: filter,
    },
    {
      $addFields: {
        amountBtc: {
          $cond: {
            if: { $eq: ['$currency', 'BTC'] },
            then: '$amount',
            else: 0,
          },
        },
      },
    },
    {
      $group: {
        _id: null,
        BtcSumNumber: { $sum: { $abs: { $toDecimal: '$amountBtc' } } },
      },
    },
    {
      $addFields: {
        BTC: { $toString: '$BtcSumNumber' },
      },
    },
    {
      $project: {
        _id: 0,
        BTC: 1,
      },
    },
  ]).exec();

  return (
    res || {
      BTC: '0',
    }
  );
};

export const getSumOfPendingDeposits = (owner: string) => {
  return getSumOf({
    owner,
    status: TransactionStatus.PENDING,
    type: CryptoLendingTransactionType.DEPOSIT,
    txId: { $exists: true },
  });
};

/**
 * Withdrawals that were requested but tx does not exist yet
 */
export const getSumOfPendingWithdrawalRequests = (owner: string) => {
  return getSumOf({
    owner,
    status: TransactionStatus.PENDING,
    type: CryptoLendingTransactionType.WITHDRAWAL,
    txId: { $eq: null },
  });
};
