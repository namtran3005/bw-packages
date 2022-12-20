import { OrderDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { OrderModel } from '../model';

export const setSolarisChangeRequestId = (
  orderId: string,
  solarisChangeRequestId: string
): Promise<DocumentDefinition<OrderDoc> | null> => {
  return OrderModel.findOneAndUpdate(
    { _id: orderId },
    { $set: { solarisChangeRequestId } },
    { runValidators: true }
  )
    .lean({ getters: true })
    .exec();
};
