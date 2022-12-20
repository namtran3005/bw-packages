import mongooseLeanId from 'mongoose-lean-id';
import {
  SolarisSeizureDoc,
  solarisSeizureSchema,
} from '@bitwala-cryptobank-squad/package-schemas';

import { mainConnection } from '../mainConnection';

solarisSeizureSchema.plugin(mongooseLeanId);

export const SolarisSeizureModel = mainConnection.db.model<SolarisSeizureDoc>(
  'SolarisSeizures',
  solarisSeizureSchema
);
