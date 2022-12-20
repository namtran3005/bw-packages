import { BitgoTransactionStatus } from '@bitwala-cryptobank-squad/package-utils';
import { BitcoinTransactionModel } from '../model';

export const findCompletedByMissingCScore = () =>
  BitcoinTransactionModel.find({
    cscore: null,
    state: BitgoTransactionStatus.CONFIRMED,
  })
    .lean()
    .exec();
