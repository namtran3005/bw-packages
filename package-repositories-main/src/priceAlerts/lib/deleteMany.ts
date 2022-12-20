import {
  PriceAlertsDoc,
  PriceAlertStatus,
  PriceAlertHistoryEntry,
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { PriceAlertsModel } from '../model';

export const deleteMany = ({
  ids,
  userId,
}: {
  ids: string[];
  userId?: string;
}): Promise<DocumentDefinition<PriceAlertsDoc> | DocumentDefinition<PriceAlertsDoc>[] | null> => {
  const status = PriceAlertStatus.DISABLED;
  const historyEntry: PriceAlertHistoryEntry = {
    status,
    timestamp: new Date(),
  };

  return PriceAlertsModel.updateMany(
    {
      _id: { $in: ids },
      ...(userId && { userId }),
    },
    {
      $set: { deletedAt: new Date(), status },
      $push: { history: historyEntry },
    },
    {
      new: true,
    }
  )
    .lean()
    .exec();
};
