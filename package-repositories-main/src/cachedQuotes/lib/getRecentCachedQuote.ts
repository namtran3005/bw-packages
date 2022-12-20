import { CachedQuotesDoc, CurrencyPair } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { CachedQuotesModel, CurrentQuotesModel } from '../model';

export const getRecentCachedQuote = async (
  pair: CurrencyPair
): Promise<DocumentDefinition<CachedQuotesDoc> | null> => {
  const quote = await CurrentQuotesModel.findOne({ pair }).lean().exec();
  if (quote) {
    return quote;
  }
  return CachedQuotesModel.findOne({ pair })
    .sort({ quotedAt: -1 })
    .lean()
    .exec();
};
