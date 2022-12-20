import mongooseLeanId from 'mongoose-lean-id';
import {
  ChainalysisAmlReportDoc,
  chainalysisAmlReportSchema,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

chainalysisAmlReportSchema.plugin(mongooseLeanId);

export const ChainalysisAmlReportModel = mainConnection.db.model<ChainalysisAmlReportDoc>(
  'ChainalysisAmlReport',
  chainalysisAmlReportSchema
);
