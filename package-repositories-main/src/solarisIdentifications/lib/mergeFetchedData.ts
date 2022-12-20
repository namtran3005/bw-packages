import { SolarisIdentificationDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { Identification } from '@bitwala-cryptobank-squad/package-solaris';
import { DocumentDefinition } from 'mongoose';
import { SolarisIdentificationModel } from '../model';

export const mergeFetchedData = (
  solarisIdentificationId: string,
  data: Identification
): Promise<DocumentDefinition<SolarisIdentificationDoc> | null> => {
  return SolarisIdentificationModel.findOneAndUpdate(
    { solarisId: solarisIdentificationId },
    { $set: data },
    { new: true }
  )
    .lean()
    .exec();
};
