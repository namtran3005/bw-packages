import { QueryCursor, Document } from 'mongoose';

/**
 * Creates cursor to consume documents as a batch.
 * @summary
 * https://github.com/Automattic/mongoose/issues/4522
 * @example
 * const batchSize = 10
 * // create cursor from model with batch size
 * const cursor = Model.find().batchSize(batchSize).cursor()
 * // create batched cursor
 * const batchedCursor = createBatchedCursor(cursor, batchSize)
 */
export const createBatchedCursor = <T extends Document>(
  cursor: QueryCursor<T>,
  batchSize = 1
) => {
  let isCursorClosed = false;

  return {
    async next() {
      if (isCursorClosed) {
        return [];
      }

      const accounts: T[] = [];

      let account;
      let batchCount = 0;

      do {
        account = await cursor.next();
        batchCount += 1;

        if (account) {
          accounts.push(account);
        }
      } while (account !== null && batchCount < batchSize);

      // cursor will auto close if null was returned
      if (account === null) {
        isCursorClosed = true;
      }

      return accounts;
    },
    hasNext: () => !isCursorClosed,
  };
};
