import { PriceAlertsDoc, PriceAlert } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { PriceAlertsModel } from '../model';

export const insert = async (priceAlert: PriceAlert): Promise<DocumentDefinition<PriceAlertsDoc> | null> =>
  PriceAlertsModel.create(priceAlert);
