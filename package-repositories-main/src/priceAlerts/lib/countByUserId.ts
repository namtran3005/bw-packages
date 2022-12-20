import { PriceAlertStatus, Currency } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { PriceAlertsModel } from '../model';

export const countByUserId = (
  userId: string,
  status?: PriceAlertStatus,
  currency?: Currency
): Promise<DocumentDefinition<number> | null> =>
  PriceAlertsModel.countDocuments({
    userId,
    ...(status && { status }),
    ...(currency && { currency }),
    deletedAt: { $exists: false },
  })
    .lean()
    .exec();
