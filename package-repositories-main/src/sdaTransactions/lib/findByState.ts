import { QueryCursor, Document } from 'mongoose';
import {
  SdaTransactionState,
  SdaTransactionDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { SdaTransactionModel } from '../model';
import { createBatchedCursor } from '../../utils';

export const findByState = (
  states: SdaTransactionState[],
  batchSize: number
) => {
  const cursor = SdaTransactionModel.find({ state: { $in: states } })
    .lean()
    .batchSize(batchSize)
    .cursor();

  return createBatchedCursor(
    cursor as QueryCursor<SdaTransactionDoc & Document>,
    batchSize
  );
};
