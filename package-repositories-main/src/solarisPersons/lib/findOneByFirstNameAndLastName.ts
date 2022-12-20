import { SolarisPersonDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisPersonModel } from '../model';

export const findOneByFirstNameAndLastName = (
  firstName: string,
  lastName: string
): Promise<DocumentDefinition<SolarisPersonDoc> | null> => {
  return SolarisPersonModel.findOne({ firstName, lastName }).lean().exec();
};
