import { OrderDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { OrderModel } from '../model';

export const findOneById = (id: string): Promise<DocumentDefinition<OrderDoc> | null> => {
  return OrderModel.findOne({ _id: id })
    .lean({ getters: true })
    .exec();
};
