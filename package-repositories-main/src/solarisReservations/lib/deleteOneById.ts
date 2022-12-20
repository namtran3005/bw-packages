import { SolarisReservationDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisReservationModel } from '../model';

export const deleteOneById = async (
  id: string
): Promise<DocumentDefinition<SolarisReservationDoc> | null> => {
  return SolarisReservationModel.deleteOne({ _id: id })
    .lean()
    .exec();
};
