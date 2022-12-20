import {
  SolarisReservationInput,
  SolarisReservationDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisReservationModel } from '../model';

// updates Reservation doc if it exists, creates one if it doesn't
export const upsertReservation = async (
  reservation: SolarisReservationInput
): Promise<DocumentDefinition<SolarisReservationDoc>> => {
  return SolarisReservationModel.findOneAndUpdate(
    {
      solarisId: reservation.solarisId,
    },
    {
      $set: reservation,
    },
    {
      new: true,
      upsert: true,
      runValidators: true,
      setDefaultsOnInsert: true,
    }
  ).exec();
};
