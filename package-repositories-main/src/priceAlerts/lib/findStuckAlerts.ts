import { PriceAlertStatus } from '@bitwala-cryptobank-squad/package-schemas';
import { PriceAlertsModel } from '../model';

export const findStuckAlerts = async (
  fromDate: Date,
  toDate: Date
): Promise<Array<string>> => {
  return PriceAlertsModel.find({
    status: PriceAlertStatus.LOCKED,
    updatedAt: {
      $gte: fromDate,
      $lt: toDate,
    },
  })
    .distinct('_id')
    .exec();
};
