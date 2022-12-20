import { SolarisBookingDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisBookingModel } from '../model';

export const findOneById = async (
  id: string
): Promise<DocumentDefinition<SolarisBookingDoc> | null> => {
  return SolarisBookingModel.findOne({
    _id: id,
  })
    .lean()
    .exec();
};
