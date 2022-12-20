import mongooseLeanId from 'mongoose-lean-id';
import {
  StandingOrderDoc,
  standingOrderSchema,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

standingOrderSchema.plugin(mongooseLeanId);

export const StandingOrdersModel = mainConnection.db.model<StandingOrderDoc>(
  'StandingOrders',
  standingOrderSchema
);
