import {
  PriceAlertStatus,
  PriceAlertsDoc,
  Currency,
  TriggerType,
  PriceAlertType,
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { PriceAlertsModel } from '../model';

export const fetchByUserId = (
  userId: string,
  options?: {
    status?: PriceAlertStatus;
    currency?: Currency;
    triggerType?: TriggerType;
    value?: number;
    type?: PriceAlertType;
  },
  projectionFields?: string[]
): Promise<DocumentDefinition<PriceAlertsDoc>[]> => {
  const projection = generateProjection(projectionFields);

  return PriceAlertsModel.aggregate([
    {
      $match: {
        userId,
        ...(options && options),
        deletedAt: { $exists: false },
      },
    },
    {
      $project: projection,
    },
  ]).exec();
};

/**
 * Generate projection based on input fields array
 * if array contains 'id', set {'id': '$_id' ,'_id': 0}
 * otherwise property values will be set to '1'
 */
export const generateProjection = (fields?: string[]) => {
  return fields?.reduce<Record<string, number | string>>((acc, field) => {
    const value = field === 'id' ? '$_id' : 1;
    if (field === 'id') {
      acc._id = 0;
    }
    acc[field] = value;
    return acc;
  }, {});
};
