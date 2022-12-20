import { CachedQuotesDoc, CurrencyPair } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { CachedQuotesModel } from '../model';

export const findOneQuoteAfter = (args: {
  pair: CurrencyPair;
  quotedAt: Date;
}): Promise<DocumentDefinition<CachedQuotesDoc> | null> => {
  const { pair, quotedAt } = args;
  return CachedQuotesModel.findOne({ pair, quotedAt: { $gt: quotedAt } })
    .sort({ quotedAt: 1 })
    .lean()
    .exec();
};
