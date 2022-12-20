import {
  SolarisBookingInput,
  SolarisBookingDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { SolarisBookingModel } from '../model';

// updates booking doc if it exists, creates one if it doesn't
export const upsertBooking = async (
  booking: SolarisBookingInput
): Promise<SolarisBookingDoc> => {
  return SolarisBookingModel.findOneAndUpdate(
    {
      solarisId: booking.solarisId,
    },
    {
      $set: booking,
    },
    {
      new: true,
      upsert: true,
      runValidators: true,
      setDefaultsOnInsert: true,
    }
  ).exec();
};
