import { OrderDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { OrderModel } from '../model';

export const setBookingId = (
  orderId: string,
  bookingId: string
): Promise<DocumentDefinition<OrderDoc> | null> => {
  return OrderModel.findOneAndUpdate(
    { _id: orderId },
    { $set: { bookingId } },
    { runValidators: true }
  )
    .lean({ getters: true })
    .exec();
};
