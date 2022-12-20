import { TradingFeeTierDoc, tradingFeeTiersSchema } from '@bitwala-cryptobank-squad/package-schemas';

import { mainConnection } from '../mainConnection';

export const TradingFeeTierModel = mainConnection.db.model<TradingFeeTierDoc>(
  'TradingFeeTiers',
  tradingFeeTiersSchema
);