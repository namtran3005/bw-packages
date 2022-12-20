import { OrderDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { OrderModel } from '../model';

export const findOneBySolarisChangeRequestId = (
  solarisChangeRequestId: string
): Promise<DocumentDefinition<OrderDoc> | null> => {
  return OrderModel.findOne({ solarisChangeRequestId })
    .lean({ getters: true })
    .exec();
};
