import { OrderDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { OrderModel } from '../model';

/**
 * Used only for eth until btc orders is refactored.
 */
export const findOneByCryptoTransactionId = (
  cryptoTransactionId: string
): Promise<DocumentDefinition<OrderDoc> | null> => {
  return OrderModel.findOne({ cryptoTransactionId })
    .lean({ getters: true })
    .exec();
};
