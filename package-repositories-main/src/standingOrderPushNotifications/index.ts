import { findByOwner } from './lib/findByOwner';
import { findByStandingOrderId } from './lib/findByStandingOrderId';
import { findOneById } from './lib/findOneById';
import { findByTransactionId } from './lib/findByTransactionId';
import { insert } from './lib/insert';

export { StandingOrderBuyNotificationsModel } from './model';

export const standingOrderPushNotificationsRepo = {
  findByOwner,
  findByStandingOrderId,
  findOneById,
  findByTransactionId,
  insert,
};
