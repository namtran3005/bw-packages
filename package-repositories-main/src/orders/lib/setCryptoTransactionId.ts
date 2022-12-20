import { OrderDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { OrderModel } from '../model';

/**
 * Used only for eth until btc orders is refactored.
 */
export const setCryptoTransactionId = (
  orderId: string,
  cryptoTransactionId: string
): Promise<DocumentDefinition<OrderDoc> | null> => {
  return OrderModel.findOneAndUpdate(
    { _id: orderId },
    { $set: { cryptoTransactionId } },
    { runValidators: true }
  )
    .lean({ getters: true })
    .exec();
};
