import { CachedQuotesDoc, CachedQuote } from '@bitwala-cryptobank-squad/package-schemas';
import { CachedQuotesModel, CurrentQuotesModel } from '../model';

export const insert = async (quote: CachedQuote): Promise<CachedQuotesDoc> => {
  await CurrentQuotesModel.findOneAndUpdate(
    { pair: quote.pair },
    { $set: quote },
    {
      runValidators: true,
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    }
  )
    .lean()
    .exec();

  return CachedQuotesModel.create(quote);
};
