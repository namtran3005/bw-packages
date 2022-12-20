import mongooseLeanId from 'mongoose-lean-id';
import {
  solarisChangeRequestsSchema,
  SolarisChangeRequestsDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

solarisChangeRequestsSchema.plugin(mongooseLeanId);

export const SolarisChangeRequestsModel = mainConnection.db.model<
  SolarisChangeRequestsDoc
>('SolarisChangeRequests', solarisChangeRequestsSchema);
