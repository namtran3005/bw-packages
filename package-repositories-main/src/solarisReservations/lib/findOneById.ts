import { SolarisReservationDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisReservationModel } from '../model';

export const findOneById = async (
  id: string
): Promise<DocumentDefinition<SolarisReservationDoc> | null> => {
  return SolarisReservationModel.findOne({
    _id: id,
  })
    .lean()
    .exec();
};
