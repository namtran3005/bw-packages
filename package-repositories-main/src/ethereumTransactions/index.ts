import { upsertByTxId } from './lib/upsertByTxId';
import { findOneByTxId } from './lib/findOneByTxId';
import { findOneById } from './lib/findOneById';
import { findAllByNonce } from './lib/findAllByNonce';
import { mergeOne } from './lib/mergeOne';
import { countByStatus } from './lib/countByStatus';
import { findOldestFailedNonceByWalletId } from './lib/findOldestFailedNonceByWalletId';
import { findLatestByWalletId } from './lib/findLatestByWalletId';
import { upsert } from './lib/upsert';
import { findPendingTxs } from './lib/findPendingTxs';
import { findCompletedByMissingCScore } from './lib/findCompletedByMissingCScore';

export { EthereumTransactionModel } from './model';

export const ethereumTransactionsRepo = {
  findOneByTxId,
  findOneById,
  findLatestByWalletId,
  findAllByNonce,
  mergeOne,
  upsertByTxId,
  countByStatus,
  findOldestFailedNonceByWalletId,
  upsert,
  findPendingTxs,
  findCompletedByMissingCScore,
};
