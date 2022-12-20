import { findOneByTxIdOwner } from './lib/findOneByTxIdOwner';
import { findOneBySdaTxSolarisId } from './lib/findOneBySdaTxSolarisId';
import { findOneById } from './lib/findOneById';
import { insert } from './lib/insert';
import { insertMany } from './lib/insertMany';
import { findLatestInterest } from './lib/findLatestInterest';
import { getPendingWithdrawals } from './lib/getPendingWithdrawals';
import { findOneByWithdrawalId } from './lib/findOneByWithdrawalId';
import { getPendingDepositsCursor } from './lib/getPendingDepositsCursor';
import {
  updateByWithdrawalId,
  updateByTxIdOwner,
  updateBySdaTxSolarisId,
} from './lib/updateOneBy';
import { findByOwner } from './lib/findByOwner';
import { countByOwnerAndStatus } from './lib/countByOwnerAndStatus';
import {
  getSumOfPendingDeposits,
  getSumOfPendingWithdrawalRequests,
} from './lib/getSumOf';
import { findOneByWithdrawalAddress } from './lib/findOneByWithdrawalAddress';
import { findLendingsByOwnerInYears } from './lib/findLendingsByOwnerInYears';
import { findSDADepositsIdsForOwner } from './lib/findSDADepositsIdsForOwner';
import { deleteManyByIds } from './lib/deleteMany';

export const cryptoLendingTransactionsRepo = {
  findOneByTxIdOwner,
  findOneById,
  insert,
  insertMany,
  findLatestInterest,
  getPendingWithdrawals,
  findOneByWithdrawalId,
  updateWithdrawal: updateByWithdrawalId,
  updateByTxIdOwner,
  updateBySdaTxSolarisId,
  getPendingDepositsCursor,
  findByOwner,
  countByOwnerAndStatus,
  getSumOfPendingDeposits,
  getSumOfPendingWithdrawalRequests,
  findOneByWithdrawalAddress,
  findLendingsByOwnerInYears,
  findOneBySdaTxSolarisId,
  findSDADepositsIdsForOwner,
  deleteManyByIds,
};
export { CryptoLendingTransactionModel } from './model';
