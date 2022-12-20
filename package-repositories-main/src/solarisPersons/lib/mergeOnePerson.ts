import { SolarisPersonDoc, SolarisPersonMeta } from '@bitwala-cryptobank-squad/package-schemas';
import { Person } from '@bitwala-cryptobank-squad/package-solaris';
import { DocumentDefinition } from 'mongoose';
import { SolarisPersonModel } from '../model';

export const mergeOnePerson = (
  solarisPersonId: string,
  data: Person & { meta?: SolarisPersonMeta }
): Promise<DocumentDefinition<SolarisPersonDoc> | null> => {
  return SolarisPersonModel.findOneAndUpdate(
    { solarisId: solarisPersonId },
    { $set: data },
    {
      new: true,
      runValidators: true,
    }
  )
    .lean()
    .exec();
};
