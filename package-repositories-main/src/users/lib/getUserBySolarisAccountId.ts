import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const getUserBySolarisAccountId = (
  solarisAccountSolarisId: string
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOne({ solarisAccountSolarisId })
    .lean()
    .exec();
};
