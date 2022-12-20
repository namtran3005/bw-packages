import { QueryCursor, Document } from 'mongoose';
import {
  TransactionStatus,
  TransactionDoc,
  TransactionAreas,
} from '@bitwala-cryptobank-squad/package-schemas';
import { TransactionModel } from '../model';
import { createBatchedCursor } from '../../utils';

export const findByAreaAndStatus = (
  areas: TransactionAreas[],
  status: TransactionStatus[],
  batchSize: number
) => {
  const cursor = TransactionModel.find({
    area: { $in: areas },
    status: { $in: status },
  })
    .lean()
    .batchSize(batchSize)
    .cursor();

  return createBatchedCursor(
    cursor as QueryCursor<TransactionDoc & Document>,
    batchSize
  );
};
