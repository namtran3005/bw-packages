import { upsert } from './lib/upsert';
import { findOneById } from './lib/findOneById';
import { findOneByBitgoId } from './lib/findOneByBitgoId';
import { mergeOne } from './lib/mergeOne';
import { findOneByTxId } from './lib/findOneByTxId';
import { findCompletedByMissingCScore } from './lib/findCompletedByMissingCScore';
import { findManyByBitgoId } from './lib/findManyByBitgoId';
import { findOneByOwnerStateAddressValue } from './lib/findOneByOwnerStateAddressValue';

export { BitcoinTransactionModel } from './model';

export const bitcoinTransactionsRepo = {
  upsert,
  findOneById,
  findOneByBitgoId,
  mergeOne,
  findOneByTxId,
  findCompletedByMissingCScore,
  findManyByBitgoId,
  findOneByOwnerStateAddressValue,
};
