import { SolarisPersonDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisPersonModel } from '../model';

export const findManyPersonsByOwner = (
  owner: string[]
): Promise<DocumentDefinition<SolarisPersonDoc>[]> => {
  return SolarisPersonModel.find({ owner: { $in: owner } })
    .lean()
    .exec();
};
