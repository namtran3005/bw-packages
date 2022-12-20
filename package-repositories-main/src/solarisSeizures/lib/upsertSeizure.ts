import {
  SolarisSeizureInput,
  SolarisSeizureDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { SolarisSeizureModel } from '../model';

export const upsertSeizure = (
  seizure: SolarisSeizureInput
): Promise<SolarisSeizureDoc> => {
  return SolarisSeizureModel.findOneAndUpdate(
    {
      solarisId: seizure.solarisId,
    },
    {
      $set: seizure,
    },
    {
      new: true,
      upsert: true,
      runValidators: true,
      setDefaultsOnInsert: true,
    }
  ).exec();
};
