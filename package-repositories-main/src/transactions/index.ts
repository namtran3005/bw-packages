import { insertTransaction } from './lib/insertTransaction';
import { getDescription } from './lib/getDescription';
import { getTransaction } from './lib/getTransaction';
import { findOneByItemId } from './lib/findOneByItemId';
import { findOneById } from './lib/findOneById';
import { upsert } from './lib/upsert';
import { updateOne } from './lib/updateOne';
import { getTransactions } from './lib/getTransactions';
import { getTransactionsCount } from './lib/getTransactionsCount';
import { getTransactionsForDownload } from './lib/getTransactionsForDownload';
import {
  getPortfolioActivityCombinedTransactions,
  getPortfolioActivityBtcTransactions,
  getPortfolioActivityEthTransactions,
  getPortfolioActivityBtcLendingTransactions,
  getPortfolioActivityCustodyBtcTransactions,
  getPortfolioActivityCustodyEthTransactions,
} from './lib/getPortfolioActivityTransactions';
import { findOne } from './lib/findOne';
import { deleteOneById } from './lib/deleteOneById';
import { deleteManyCryptoLendingTxs } from './lib/deleteMany';
import { getTransactionsForYear } from './lib/getTransactionsForYear';
import { getTransactionCountForYear } from './lib/getTransactionCountForYear';
import { getPendingTransactionsByOwner } from './lib/getPendingTransactionsByOwner';
import { getCompletedTransactionsByOwner } from './lib/getCompletedTransactionsByOwner';
import { updateStateById } from './lib/updateStateById';
import { getTransactionsYears } from './lib/getTransactionsYears';
import { insertManyCryptoLendingDeposits } from './lib/insertMany';
import { findByAreaAndStatus } from './lib/findByAreaAndStatus';

export { TransactionModel } from './model';

export const transactionsRepo = {
  insert: insertTransaction,
  getTransaction,
  getDescription,
  findOneById,
  findOneByItemId,
  upsert,
  updateOne,
  getTransactions,
  getTransactionsCount,
  getTransactionsYears,
  getPortfolioActivityCombinedTransactions,
  getPortfolioActivityBtcTransactions,
  getPortfolioActivityEthTransactions,
  getPortfolioActivityBtcLendingTransactions,
  findOne,
  deleteOneById,
  getTransactionsForYear,
  getTransactionCountForYear,
  getTransactionsForDownload,
  getCompletedTransactionsByOwner,
  getPendingTransactionsByOwner,
  getPortfolioActivityCustodyBtcTransactions,
  getPortfolioActivityCustodyEthTransactions,
  updateStateById,
  deleteManyCryptoLendingTxs,
  insertManyCryptoLendingDeposits,
  findByAreaAndStatus,
};
