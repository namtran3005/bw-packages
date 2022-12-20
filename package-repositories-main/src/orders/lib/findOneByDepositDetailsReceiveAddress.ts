import { OrderDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { OrderModel } from '../model';

export const findOneByDepositDetailsReceiveAddress = (
  address: string
): Promise<DocumentDefinition<OrderDoc> | null> => {
  return OrderModel.findOne({ 'depositDetails.receiveAddress': address })
    .lean({ getters: true })
    .exec();
};
