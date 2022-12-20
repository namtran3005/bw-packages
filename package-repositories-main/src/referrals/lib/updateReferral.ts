import { ReferralDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { ReferralModel } from '../model';

export const updateReferral = (
  end_to_end: string,
  data: Partial<ReferralDoc>
): Promise<DocumentDefinition<ReferralDoc> | DocumentDefinition<ReferralDoc>[] | null> => {
  return ReferralModel.updateOne(
    { end_to_end },
    {
      $set: {
        ...data,
      },
    },
    {
      upsert: true,
    }
  )
    .lean()
    .exec();
};
