import { OrderDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { OrderModel } from '../model';

export const findOneByOrderId = (orderId: string): Promise<DocumentDefinition<OrderDoc> | null> => {
  return OrderModel.findOne({ orderId })
    .lean({ getters: true })
    .exec();
};
