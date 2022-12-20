import { TradingVolumeHistoryDoc, tradingVolumeHistorySchema } from '@bitwala-cryptobank-squad/package-schemas';

import { mainConnection } from '../mainConnection';

export const TradingVolumeHistoryModel = mainConnection.db.model<TradingVolumeHistoryDoc>(
  'TradingVolumeHistory',
  tradingVolumeHistorySchema
);