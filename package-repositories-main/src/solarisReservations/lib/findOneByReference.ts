import { SolarisReservationDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisReservationModel } from '../model';

export const findOneByReference = async (
  reference: string
): Promise<DocumentDefinition<SolarisReservationDoc> | null> => {
  return SolarisReservationModel.findOne({ reference })
    .lean()
    .exec();
};
