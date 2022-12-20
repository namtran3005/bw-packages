import {
  Currency, PriceAlertsDoc, PriceAlertStatus, PriceAlertType
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { PriceAlertsModel } from '../model';

export const fetchByType = ({
  type,
  status,
  currency,
}: {
  type: PriceAlertType;
  status?: PriceAlertStatus;
  currency?: Currency;
}): Promise<DocumentDefinition<PriceAlertsDoc>[]> => {
  const selector = {
    type,
    ...(status && { status }),
    ...(currency && { currency }),
  };

  return PriceAlertsModel.find(selector)
    .lean()
    .exec();
};
