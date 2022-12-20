import { SdaAddressDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SdaAddressModel } from '../model';

export const findOneByAddress = (
  address: string
): Promise<DocumentDefinition<SdaAddressDoc> | null> => {
  return SdaAddressModel.findOne({
    address,
    deletedAt: { $exists: false },
  })
    .lean()
    .exec();
};
