import { SdaAddressDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SdaAddressModel } from '../model';

export const findOneByAccountId = (
  accountId: string
): Promise<DocumentDefinition<SdaAddressDoc> | null> => {
  return SdaAddressModel.findOne({
    accountId,
    deletedAt: { $exists: false },
  })
    .lean()
    .exec();
};
