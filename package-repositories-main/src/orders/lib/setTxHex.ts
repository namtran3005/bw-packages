import { OrderDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { OrderModel } from '../model';

export const setTxHex = (
  orderId: string,
  txHex: string
): Promise<DocumentDefinition<OrderDoc> | null> => {
  return OrderModel.findOneAndUpdate(
    { _id: orderId },
    { $set: { txHex } },
    { runValidators: true }
  )
    .lean({ getters: true })
    .exec();
};
