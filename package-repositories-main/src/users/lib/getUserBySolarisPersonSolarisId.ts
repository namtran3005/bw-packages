import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const getUserBySolarisPersonSolarisId = (
  solarisPersonSolarisId: string
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOne({ solarisPersonSolarisId })
    .lean()
    .exec();
};
