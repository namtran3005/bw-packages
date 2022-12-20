import { DocumentDefinition } from 'mongoose';
import { TradingFeeTierDoc } from '@bitwala-cryptobank-squad/package-schemas';

import { TradingFeeTierModel } from '../model';

export const getByTierId = (
  tierId: string
): Promise<DocumentDefinition<TradingFeeTierDoc> | null> => {
  return TradingFeeTierModel.findOne({ tierId })
    .exec();
};
