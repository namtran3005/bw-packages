import mongooseLeanId from 'mongoose-lean-id';
import {
  tradingAvailabilitySchema,
  TradingAvailabilityDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

tradingAvailabilitySchema.plugin(mongooseLeanId);
export const tradingAvailabilityModel = mainConnection.db.model<
  TradingAvailabilityDoc
>('TradingAvailability', tradingAvailabilitySchema);
