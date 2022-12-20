import { OrderDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { OrderModel } from '../model';

export const findOneByReferenceId = (
  referenceId: string
): Promise<DocumentDefinition<OrderDoc> | null> => {
  return OrderModel.findOne({ referenceId })
    .lean({ getters: true })
    .exec();
};
