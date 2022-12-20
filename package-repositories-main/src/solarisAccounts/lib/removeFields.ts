import { SolarisAccountDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { Account } from '@bitwala-cryptobank-squad/package-solaris';
import { DocumentDefinition } from 'mongoose';
import { SolarisAccountModel } from '../model';

export const removeFields = (
  solarisAccountId: string,
  data: { [K in keyof Partial<Account>]: '' }
): Promise<DocumentDefinition<SolarisAccountDoc> | null> => {
  return SolarisAccountModel.findOneAndUpdate(
    { solarisId: solarisAccountId },
    { $unset: data }
  )
    .lean()
    .exec();
};
