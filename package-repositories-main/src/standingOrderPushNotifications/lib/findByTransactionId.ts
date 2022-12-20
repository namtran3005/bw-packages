import { StandingOrderPushNotificationDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { SepaScheduledTransactionEventStatus } from '@bitwala-cryptobank-squad/package-solaris';
import { DocumentDefinition } from 'mongoose';
import { StandingOrderBuyNotificationsModel } from '../model';

export const findByTransactionId = (
  transactionId: string,
  status?: SepaScheduledTransactionEventStatus
): Promise<DocumentDefinition<StandingOrderPushNotificationDoc>[]> => {
  return StandingOrderBuyNotificationsModel.find({
    transactionId,
    status: status
      ? status
      : { $in: Object.values(SepaScheduledTransactionEventStatus) },
  })
    .lean()
    .exec();
};
