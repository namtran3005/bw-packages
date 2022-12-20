import mongooseLeanId from 'mongoose-lean-id';
import { priceAlertSchema, PriceAlertsDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

priceAlertSchema.plugin(mongooseLeanId);

export const PriceAlertsModel = mainConnection.db.model<PriceAlertsDoc>(
  'PriceAlerts',
  priceAlertSchema
);
