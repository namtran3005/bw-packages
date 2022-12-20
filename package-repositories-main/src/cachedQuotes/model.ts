import mongooseLeanId from 'mongoose-lean-id';
import {
  CachedQuotesDoc,
  cachedQuotesSchema,
  CurrentQuotesDoc,
  currentQuotesSchema,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

cachedQuotesSchema.plugin(mongooseLeanId);
currentQuotesSchema.plugin(mongooseLeanId);

export const CachedQuotesModel = mainConnection.db.model<CachedQuotesDoc>(
  'CachedQuotes',
  cachedQuotesSchema
);

export const CurrentQuotesModel = mainConnection.db.model<CurrentQuotesDoc>(
  'CurrentQuotesDoc',
  currentQuotesSchema
);
