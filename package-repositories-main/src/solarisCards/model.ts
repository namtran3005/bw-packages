import mongooseLeanId from 'mongoose-lean-id';
import { solarisCardSchema, SolarisCardDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

solarisCardSchema.plugin(mongooseLeanId);

export const SolarisCardModel = mainConnection.db.model<SolarisCardDoc>(
  'SolarisCards',
  solarisCardSchema
);
