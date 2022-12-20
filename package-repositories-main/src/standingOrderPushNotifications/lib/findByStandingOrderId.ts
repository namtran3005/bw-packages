import { StandingOrderPushNotificationDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { StandingOrderBuyNotificationsModel } from '../model';

export const findByStandingOrderId = (
  standingOrderId: string
): Promise<DocumentDefinition<StandingOrderPushNotificationDoc>[]> => {
  return StandingOrderBuyNotificationsModel.find({ standingOrderId })
    .lean()
    .exec();
};
