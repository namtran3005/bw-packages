import { SolarisPersonDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisPersonModel } from '../model';

export const findPersonByOwner = (
  owner: string
): Promise<DocumentDefinition<SolarisPersonDoc> | null> => {
  return SolarisPersonModel.findOne({ owner })
    .lean()
    .exec();
};
