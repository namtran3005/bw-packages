import { SolarisMobileNumberDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { MobileNumber } from '@bitwala-cryptobank-squad/package-solaris';
import { DocumentDefinition } from 'mongoose';
import { SolarisMobileNumberModel } from '../model';

export const mergeOneMobileNumber = (
  solarisMobileNumberId: string,
  data: MobileNumber
): Promise<DocumentDefinition<SolarisMobileNumberDoc> | null> => {
  return SolarisMobileNumberModel.findOneAndUpdate(
    { solarisId: solarisMobileNumberId },
    { $set: data },
    { runValidators: true }
  )
    .lean()
    .exec();
};
