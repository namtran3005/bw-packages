import { SolarisAccountDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { Account } from '@bitwala-cryptobank-squad/package-solaris';
import { DocumentDefinition } from 'mongoose';
import { SolarisAccountModel } from '../model';

export const mergeOne = (
  solarisAccountId: string,
  data: Account
): Promise<DocumentDefinition<SolarisAccountDoc> | null> => {
  return SolarisAccountModel.findOneAndUpdate(
    { solarisId: solarisAccountId },
    { $set: data },
    { runValidators: true, new: true }
  )
    .lean()
    .exec();
};
