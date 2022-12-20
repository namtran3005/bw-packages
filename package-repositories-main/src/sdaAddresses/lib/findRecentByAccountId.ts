import { SdaAddressDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SdaAddressModel } from '../model';

export const findRecentByAccountId = (
  accountId: string,
  limit?: number
): Promise<DocumentDefinition<SdaAddressDoc>[]> => {
  const query = SdaAddressModel.find({
    accountId,
    deletedAt: { $exists: false },
  })
    .sort({ createdAt: -1 })
    .limit(limit ?? 1);

  return query.lean().exec();
};
