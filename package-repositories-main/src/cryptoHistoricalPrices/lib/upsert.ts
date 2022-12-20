import { HistoricalPricesDataPoint } from '@bitwala-cryptobank-squad/package-schemas';
import { Currencies } from '@bitwala-cryptobank-squad/package-solaris';
import { CryptoHistoricalPricesModel } from '../model';

export interface CryptoHistoricalPricesInput {
  currency: Currencies.ETH | Currencies.BTC;
  date: Date;
  dataPoint: HistoricalPricesDataPoint;
}

export const upsert = async (input: CryptoHistoricalPricesInput) => {
  /**
   * First try to push a data point to the doc, accumulating current day's data
   */
  const updRes = await CryptoHistoricalPricesModel.updateOne(
    {
      currency: input.currency,
      date: input.date,
    },
    {
      $push: {
        data: input.dataPoint,
      },
    },
    {
      upsert: false,
    }
  );

  /**
   * If the data point is gonna be the first one for the day, no doc would exist yet, so would have to be inserted
   */
  if (updRes.nModified === 0) {
    await CryptoHistoricalPricesModel.create({
      currency: input.currency,
      date: input.date,
      data: [input.dataPoint],
    });
  }
};
