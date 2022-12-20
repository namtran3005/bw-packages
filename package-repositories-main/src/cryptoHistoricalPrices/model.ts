import {
  historicalPricesSchema,
  HistoricalPricesDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

export const CryptoHistoricalPricesModel = mainConnection.db.model<
  HistoricalPricesDoc
>('CryptoHistoricalPrices', historicalPricesSchema);
