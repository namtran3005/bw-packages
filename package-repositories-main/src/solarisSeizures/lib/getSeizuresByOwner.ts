
import { DocumentDefinition } from 'mongoose';
import {
  SolarisSeizureDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { SolarisSeizureModel } from '../model';

export const getSeizuresByOwner = (
  owner: string
): Promise<DocumentDefinition<SolarisSeizureDoc>[]> => {
  return SolarisSeizureModel.find({ owner })
    .lean()
    .exec();
};
