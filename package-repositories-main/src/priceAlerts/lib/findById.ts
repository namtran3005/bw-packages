import { PriceAlertsDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { PriceAlertsModel } from '../model';

export const findById = (id: string): Promise<DocumentDefinition<PriceAlertsDoc> | null> =>
  PriceAlertsModel.findById(id)
    .lean()
    .exec();
