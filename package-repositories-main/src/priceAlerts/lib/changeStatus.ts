import {
  PriceAlertsDoc,
  PriceAlertHistoryEntry,
  PriceAlertStatus,
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { PriceAlertsModel } from '../model';

export interface PriceAlertStatusUpdate {
  $set: { status: PriceAlertStatus };
  $push?: { history: PriceAlertHistoryEntry };
}

export const changeStatus = ({
  ids,
  status,
  notificationId,
  setHistory,
}: {
  ids: string[];
  status: PriceAlertStatus;
  notificationId?: string;
  setHistory?: boolean;
}): Promise<DocumentDefinition<PriceAlertsDoc> | DocumentDefinition<PriceAlertsDoc>[] | null> => {
  let update: PriceAlertStatusUpdate = {
    $set: { status },
  };

  if (setHistory) {
    const historyEntry: PriceAlertHistoryEntry = {
      status,
      timestamp: new Date(),
      ...(notificationId && { notificationId }),
    };
    update = { ...update, $push: { history: historyEntry } };
  }

  return PriceAlertsModel.updateMany(
    {
      _id: { $in: ids },
    },
    update
  )
    .lean()
    .exec();
};
