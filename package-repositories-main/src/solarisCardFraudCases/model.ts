import mongooseLeanId from 'mongoose-lean-id';
import {
  solarisCardFraudCaseSchema,
  SolarisCardFraudCaseDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

solarisCardFraudCaseSchema.plugin(mongooseLeanId);

export const SolarisCardFraudCaseModel = mainConnection.db.model<
  SolarisCardFraudCaseDoc
>('SolarisCardFraudCases', solarisCardFraudCaseSchema);
