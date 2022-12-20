/* eslint-disable @typescript-eslint/no-explicit-any */
import mongooseLeanId from 'mongoose-lean-id';
import { coinfirmAmlReportSchema } from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

coinfirmAmlReportSchema.plugin(mongooseLeanId);
export const CoinfirmAmlReport = mainConnection.db.model<any>(
  'CoinfirmAmlReport',
  coinfirmAmlReportSchema
);
