import { Document, QueryCursor } from 'mongoose';
import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { createBatchedCursor } from '../../utils';
import { usersRepo } from '../index';

export interface FetchUsersToNotifyInput {
  triggeredAt: {
    after: Date;
    before: Date;
  };
  event: string;
  projectionFields: ReadonlyArray<keyof UserDoc>;
  batchSize: number;
  idsToMatch?: string[];
}

export const fetchUsersToNotifyBatchedCursor = <T extends keyof UserDoc>({
  triggeredAt,
  event,
  projectionFields,
  idsToMatch,
  batchSize,
}: FetchUsersToNotifyInput) => {
  const priceAlertCursor = usersRepo.fetchUsersToNotifyWithCursor({
    triggeredAt,
    event,
    projectionFields,
    idsToMatch,
    batchSize,
  }) as QueryCursor<Document & Pick<UserDoc, T>>;

  return createBatchedCursor(priceAlertCursor, batchSize);
};
