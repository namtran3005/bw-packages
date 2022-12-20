import mongooseLeanId from 'mongoose-lean-id';
import mongooseLeanGetters from 'mongoose-lean-getters';
import { ordersSchema, OrderDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

ordersSchema.plugin(mongooseLeanGetters);
ordersSchema.plugin(mongooseLeanId);

export const OrderModel = mainConnection.db.model<OrderDoc>(
  'Orders',
  ordersSchema
);
