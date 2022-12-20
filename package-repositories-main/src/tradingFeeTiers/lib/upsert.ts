import { DocumentDefinition } from 'mongoose';
import {
  TradingFeeTier,
  TradingFeeTierDoc,
} from '@bitwala-cryptobank-squad/package-schemas';

import { TradingFeeTierModel } from '../model';

export const upsert = (
  data: TradingFeeTier
): Promise<DocumentDefinition<TradingFeeTierDoc> | null> => {
  return TradingFeeTierModel.findOneAndUpdate(
    { tierId: data.tierId },
    { $set: data },
    {
      new: true,
      upsert: true,
      runValidators: true,
      setDefaultsOnInsert: true,
    }
  )
    .exec();
};
