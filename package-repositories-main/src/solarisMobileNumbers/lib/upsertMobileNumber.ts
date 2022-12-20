import { SolarisMobileNumberDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { MobileNumber } from '@bitwala-cryptobank-squad/package-solaris';
import { DocumentDefinition } from 'mongoose';
import { SolarisMobileNumberModel } from '../model';

export const upsertMobileNumber = (
  mobileNumber: MobileNumber & { owner: string }
): Promise<DocumentDefinition<SolarisMobileNumberDoc> | null> => {
  return SolarisMobileNumberModel.findOneAndUpdate(
    { solarisId: mobileNumber.solarisId },
    { $set: mobileNumber },
    {
      new: true,
      upsert: true,
      runValidators: true,
      setDefaultsOnInsert: true,
    }
  )
    .lean()
    .exec();
};
