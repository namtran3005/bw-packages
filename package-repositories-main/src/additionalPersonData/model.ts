import mongooseLeanId from 'mongoose-lean-id';
import {
  additionalPersonDataSchema,
  AdditionalPersonDataDoc,
} from '@bitwala-cryptobank-squad/package-schemas';

import { mainConnection } from '../mainConnection';

additionalPersonDataSchema.plugin(mongooseLeanId);

export const AdditionalPersonDataModel = mainConnection.db.model<AdditionalPersonDataDoc>(
  'AdditionalDataPerson',
  additionalPersonDataSchema
);
