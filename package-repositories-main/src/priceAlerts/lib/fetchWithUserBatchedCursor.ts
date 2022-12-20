import { Document, DocumentDefinition, QueryCursor } from 'mongoose';
import { PriceAlertsDoc, UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { createBatchedCursor } from '../../utils';
import { priceAlertRepo } from '../index';

export type PriceAlertWithUser = Pick<
  DocumentDefinition<PriceAlertsDoc>,
  'value' | 'triggerType' | 'type' | '_id'
> & {
  user: Pick<DocumentDefinition<UserDoc>, '_id' | 'locale' | 'pushNotificationsConfigs'>;
};

export const fetchWithUserBatchedCursor = (
  ids: string[],
  alertTypePNEventMap: Record<string, string>,
  batchSize: number
) => {
  const priceAlertCursor = priceAlertRepo.fetchWithUserCursor(
    ids,
    alertTypePNEventMap,
    batchSize
  ) as QueryCursor<Document & PriceAlertWithUser>;

  return createBatchedCursor(priceAlertCursor, batchSize);
};
