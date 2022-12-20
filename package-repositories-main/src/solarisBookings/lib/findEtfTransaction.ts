import { SolarisBookingDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisBookingModel } from '../model';

export const findEtfTransaction = async (
  itemId: string
): Promise<DocumentDefinition<SolarisBookingDoc> | null> => {
  return SolarisBookingModel.findOne({
    description: itemId,
  })
    .lean()
    .exec();
};
