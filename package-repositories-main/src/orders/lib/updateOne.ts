import { Order, OrderDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { OrderModel } from '../model';

export const updateOne = (
  id: string,
  data: Partial<Order>
): Promise<DocumentDefinition<OrderDoc> | null> => {
  return OrderModel.findOneAndUpdate(
    { _id: id },
    { $set: data },
    {
      runValidators: true,
      new: true,
    }
  )
    .lean({ getters: true })
    .exec();
};
