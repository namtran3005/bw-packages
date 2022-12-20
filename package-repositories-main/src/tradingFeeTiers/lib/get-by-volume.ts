import { DocumentDefinition } from 'mongoose';
import { TradingFeeTierDoc } from '@bitwala-cryptobank-squad/package-schemas';

import { TradingFeeTierModel } from '../model';

export const getByVolume = (
  volume: number
): Promise<DocumentDefinition<TradingFeeTierDoc>[] | null> => {
  return TradingFeeTierModel.find({
    volumeLowerBound: {
      $lte: volume
    },
    volumeUpperBound: {
      $gt: volume
    }
  })
    .exec();
};
