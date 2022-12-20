import { OrderDoc, Order } from '@bitwala-cryptobank-squad/package-schemas';
import { OrderModel } from '../model';

export const insert = (
  transfer: Order & { owner: string }
): Promise<OrderDoc> => {
  return OrderModel.create(transfer);
};
