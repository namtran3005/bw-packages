import mongooseLeanId from 'mongoose-lean-id';
import { scaChallengeSchema, ScaChallengeDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

scaChallengeSchema.plugin(mongooseLeanId);

export const ScaChallengeModel = mainConnection.db.model<ScaChallengeDoc>(
  'ScaChallenge',
  scaChallengeSchema
);
