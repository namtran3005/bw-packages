import mongooseLeanId from 'mongoose-lean-id';
import {
  referralsSchema,
  ReferralDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

referralsSchema.plugin(mongooseLeanId);

export const ReferralModel = mainConnection.db.model<ReferralDoc>(
  'referral',
  referralsSchema
);
