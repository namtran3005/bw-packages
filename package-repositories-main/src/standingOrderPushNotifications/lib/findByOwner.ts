import { StandingOrderPushNotificationDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { StandingOrderBuyNotificationsModel } from '../model';

export const findByOwner = (
  owner: string
): Promise<DocumentDefinition<StandingOrderPushNotificationDoc>[]> => {
  return StandingOrderBuyNotificationsModel.find({ owner }).lean().exec();
};
