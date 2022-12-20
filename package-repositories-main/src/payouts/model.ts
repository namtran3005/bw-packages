import mongooseLeanId from 'mongoose-lean-id';
import {
  payoutsSchema,
  PayoutStatus,
  PayoutDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

export { PayoutStatus };

payoutsSchema.plugin(mongooseLeanId);

export const PayoutsModel = mainConnection.db.model<PayoutDoc>(
  'Payouts',
  payoutsSchema
);
