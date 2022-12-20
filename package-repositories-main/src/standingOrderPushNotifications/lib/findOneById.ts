import { StandingOrderPushNotificationDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { StandingOrderBuyNotificationsModel } from '../model';

export const findOneById = (
  id: string
): Promise<DocumentDefinition<StandingOrderPushNotificationDoc> | null> => {
  return StandingOrderBuyNotificationsModel.findOne({ _id: id }).lean().exec();
};
