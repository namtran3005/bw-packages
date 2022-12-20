import mongooseLeanId from 'mongoose-lean-id';
import {
  solarisChallengeEmailSchema,
  SolarisChallengeEmailDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

solarisChallengeEmailSchema.plugin(mongooseLeanId);

export const SolarisChallengeEmailModel = mainConnection.db.model<SolarisChallengeEmailDoc>(
  'SolarisChallengeEmail',
  solarisChallengeEmailSchema
);
