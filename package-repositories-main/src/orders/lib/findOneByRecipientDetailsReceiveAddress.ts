import { OrderDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { OrderModel } from '../model';

export const findOneByRecipientDetailsReceiveAddress = (
  address: string
): Promise<DocumentDefinition<OrderDoc> | null> => {
  return OrderModel.findOne({ 'recipientDetails.receiveAddress': address })
    .lean({ getters: true })
    .exec();
};
