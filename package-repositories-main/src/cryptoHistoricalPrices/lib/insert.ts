import { HistoricalPricesDataPoint } from '@bitwala-cryptobank-squad/package-schemas';
import { Currencies } from '@bitwala-cryptobank-squad/package-solaris';
import { CryptoHistoricalPricesModel } from '../model';

export interface InsertInput {
  currency: Currencies.BTC | Currencies.ETH;
  date: Date;
  data: HistoricalPricesDataPoint[];
}

/**
 * Defaults to insertMany behavior, if a single item is inserted, has to be wrapped in an array
 */
export const insert = (input: InsertInput[]) =>
  CryptoHistoricalPricesModel.insertMany(input);
