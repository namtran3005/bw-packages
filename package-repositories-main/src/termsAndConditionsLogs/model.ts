import mongooseLeanId from 'mongoose-lean-id';
import {
  TermsAndConditionsDoc,
  termsAndConditionsSchema,
} from '@bitwala-cryptobank-squad/package-schemas';

import { mainConnection } from '../mainConnection';

termsAndConditionsSchema.plugin(mongooseLeanId);

export const TermsAndConditionsLogsModel =
  mainConnection.db.model<TermsAndConditionsDoc>(
    'TermsAndConditionsLogs',
    termsAndConditionsSchema
  );
