import {
  TriggerType,
  PriceAlertType,
  Currency,
  PriceAlertStatus,
  ActivityInterval,
} from '@bitwala-cryptobank-squad/package-schemas';
import { PriceAlertsModel } from '../model';

const typeMap = {
  // alert value must be less than btc/eth price then they get triggered
  [TriggerType.ABOVE]: '$lte',
  // alert value must be greater than btc/eth price then they get triggered
  [TriggerType.BELOW]: '$gte',
  [TriggerType.ANY]: '$lte',
};

export interface PriceAlertQuery {
  type: PriceAlertType;
  value: number;
  currency: Currency;
  triggerTypes: TriggerType[];
  status: PriceAlertStatus;
  activityInterval: ActivityInterval;
  isGlobal?: boolean;
  userId?: string;
}

export const fetchIds = (
  priceAlertQuery: PriceAlertQuery
): Promise<string[] | null> => {
  const {
    currency,
    value,
    status,
    type,
    triggerTypes,
    activityInterval,
    isGlobal,
  } = priceAlertQuery;

  // Example how $or could/would look like:
  // { $or: [{triggerType: 'above', value: {'$lte': 180}},
  //         {triggerType: 'below', value: {'$gte': 180}}] }
  const triggerTypeExp = triggerTypes.map(triggerType => ({
    triggerType,
    value: { [typeMap[triggerType]]: value },
  }));

  // global alerts do not have an userId, therefore !isGlobal
  // to query only for global alerts
  const queryUserPriceAlerts =
    isGlobal === undefined ? undefined : { userId: { $exists: !isGlobal } };

  const query = {
    type,
    status,
    $or: triggerTypeExp,
    ...queryUserPriceAlerts,
    currency,
    'activityInterval.endHour': { $gt: activityInterval.endHour },
    'activityInterval.startHour': { $lte: activityInterval.startHour },
  };

  return PriceAlertsModel.find(query)
    .distinct('_id')
    .exec();
};
