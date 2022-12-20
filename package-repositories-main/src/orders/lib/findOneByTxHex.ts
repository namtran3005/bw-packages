import { OrderDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { OrderModel } from '../model';

export const findOneByTxHex = (txHex: string): Promise<DocumentDefinition<OrderDoc> | null> => {
  return OrderModel.findOne({ txHex })
    .lean()
    .exec();
};
