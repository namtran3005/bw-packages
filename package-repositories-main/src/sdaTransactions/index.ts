import { findById } from './lib/findById';
import { findSettledTransactionByOwner } from './lib/findSettledTransactionByOwner';
import { findOneBySolarisId } from './lib/findOneBySolarisId';
import { insert } from './lib/insert';
import { update } from './lib/update';
import { upsert } from './lib/upsert';
import { findOneByOwnerAndBlockchainTxId } from './lib/findOneByOwnerAndBlockchainTxId';
import { findStuckPendingTransactions } from './lib/findStuckPendingTransactions';
import { findWithdrawalsByOwner } from './lib/findWithdrawalsByOwner';
import { findByState } from './lib/findByState';
import { findDepositsByOwner } from './lib/findDepositsByOwner';

export { SdaTransactionModel } from './model';

export const sdaTransactionsRepo = {
  findById,
  findByState,
  findOneBySolarisId,
  insert,
  update,
  upsert,
  findOneByOwnerAndBlockchainTxId,
  findSettledTransactionByOwner,
  findStuckPendingTransactions,
  findWithdrawalsByOwner,
  findDepositsByOwner,
};
