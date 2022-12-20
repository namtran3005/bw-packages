import {
  CryptoSettlementType, TransactionAreas, TransactionDoc,
  TransactionStatus
} from '@bitwala-cryptobank-squad/package-schemas';
import { Currencies } from '@bitwala-cryptobank-squad/package-solaris';
import { DocumentDefinition } from 'mongoose';
import { BitcoinTransactionModel } from '../../bitcoinTransactions';
import { CryptoLendingTransactionModel } from '../../cryptoLendingTransactions';
import { EthereumTransactionModel } from '../../ethereumTransactions';
import { OrderModel } from '../../orders';
import { SdaTransactionModel } from '../../sdaTransactions';
import { TransactionModel } from '../model';
import { getTradesFilters } from '../utils';


interface TransactionsSelector {
  owner: string;
}
export interface GetPortfolioActivityTransactionsOptions {
  offset: number;
  limit: number;
}

const getPortfolioActivityTransactions = async <T extends TransactionsSelector>(
  options: GetPortfolioActivityTransactionsOptions,
  selector: T
): Promise<DocumentDefinition<TransactionDoc>[]> => {
  const { offset, limit } = options;

  return TransactionModel.find(selector)
    .sort({ transactionTime: -1 })
    .skip(offset)
    .limit(limit)
    .lean()
    .exec();
};

export const getPortfolioActivityCombinedTransactions = async (
  owner: string,
  options: GetPortfolioActivityTransactionsOptions
): Promise<DocumentDefinition<TransactionDoc>[]> => {
  const selector = {
    owner,
    $or: [
      {
        domain: BitcoinTransactionModel.collection.name,
      },
      {
        domain: EthereumTransactionModel.collection.name,
      },
      {
        domain: CryptoLendingTransactionModel.collection.name,
      },
      {
        $and: [
          {
            $or: [
              {
                domain: `${Currencies.ETH.toLowerCase()}-${
                  SdaTransactionModel.collection.name
                }`,
              },
              {
                domain: `${Currencies.BTC.toLowerCase()}-${
                  SdaTransactionModel.collection.name
                }`,
              },
              {
                domain: OrderModel.collection.name,
              },
            ],
          },
          {
            status: {
              $nin: [TransactionStatus.FAILED, TransactionStatus.CANCEL],
            },
          },
        ],
      },
    ],
  };

  return getPortfolioActivityTransactions(options, selector);
};

export const getPortfolioActivityBtcTransactions = async (
  owner: string,
  options: GetPortfolioActivityTransactionsOptions
): Promise<DocumentDefinition<TransactionDoc>[]> => {
  const tradesFilters = getTradesFilters(
    Currencies.BTC,
    CryptoSettlementType.ON_CHAIN
  );
  const selector = {
    owner,
    $or: [
      {
        domain: BitcoinTransactionModel.collection.name,
      },
      tradesFilters,
    ],
    status: {
      $nin: [TransactionStatus.FAILED, TransactionStatus.CANCEL],
    },
  };

  return getPortfolioActivityTransactions(options, selector);
};

export const getPortfolioActivityEthTransactions = async (
  owner: string,
  options: GetPortfolioActivityTransactionsOptions
): Promise<DocumentDefinition<TransactionDoc>[]> => {
  const tradesFilters = getTradesFilters(
    Currencies.ETH,
    CryptoSettlementType.ON_CHAIN
  );
  const selector = {
    owner,
    $or: [
      {
        domain: EthereumTransactionModel.collection.name,
      },
      tradesFilters,
    ],
    status: {
      $nin: [TransactionStatus.FAILED, TransactionStatus.CANCEL],
    },
  };

  return getPortfolioActivityTransactions(options, selector);
};

export const getPortfolioActivityBtcLendingTransactions = async (
  owner: string,
  options: GetPortfolioActivityTransactionsOptions
): Promise<DocumentDefinition<TransactionDoc>[]> => {
  const selector = {
    owner,
    area: TransactionAreas.CRYPTO_LENDING,
    status: {
      $nin: [TransactionStatus.FAILED, TransactionStatus.CANCEL],
    },
  };

  return getPortfolioActivityTransactions(options, selector);
};

export const getPortfolioActivityCustodyBtcTransactions = async (
  owner: string,
  options: GetPortfolioActivityTransactionsOptions
): Promise<DocumentDefinition<TransactionDoc>[]> => {
  const tradesFilters = getTradesFilters(
    Currencies.BTC,
    CryptoSettlementType.OFF_CHAIN
  );
  const selector = {
    owner,
    $or: [
      {
        domain: `${Currencies.BTC.toLowerCase()}-${
          SdaTransactionModel.collection.name
        }`,
      },
      //Added this query to fetch Bitcoin investment transactions from bitcoin wallet
      {
        area: TransactionAreas.SDA_TRANSACTION,
        domain: CryptoLendingTransactionModel.collection.name,
      },
      tradesFilters,
    ],
    status: {
      $nin: [TransactionStatus.FAILED, TransactionStatus.CANCEL],
    },
  };

  return getPortfolioActivityTransactions(options, selector);
};

export const getPortfolioActivityCustodyEthTransactions = async (
  owner: string,
  options: GetPortfolioActivityTransactionsOptions
): Promise<DocumentDefinition<TransactionDoc>[]> => {
  const tradeFilters = getTradesFilters(
    Currencies.ETH,
    CryptoSettlementType.OFF_CHAIN
  );
  const selector = {
    owner,
    $or: [
      {
        domain: `${Currencies.ETH.toLowerCase()}-${
          SdaTransactionModel.collection.name
        }`,
      },
      tradeFilters,
    ],
    status: {
      $nin: [TransactionStatus.FAILED, TransactionStatus.CANCEL],
    },
  };

  return getPortfolioActivityTransactions(options, selector);
};
