import {
  StandingOrderPushNotification,
  StandingOrderPushNotificationDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { StandingOrderBuyNotificationsModel } from '../model';

export const insert = (
  data: StandingOrderPushNotification
): Promise<StandingOrderPushNotificationDoc> => {
  return StandingOrderBuyNotificationsModel.create(data);
};
