import mongooseLeanId from 'mongoose-lean-id';
import {
  solarisLegitimationSchema,
  SolarisLegitimationDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

solarisLegitimationSchema.plugin(mongooseLeanId);

export const SolarisLegitimationsModel = mainConnection.db.model<
  SolarisLegitimationDoc
>('SolarisLegitimations', solarisLegitimationSchema);
