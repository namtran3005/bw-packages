import { StandingOrder } from '@bitwala-cryptobank-squad/package-solaris';
import { DocumentDefinition } from 'mongoose';
import { StandingOrdersModel } from '../model';

export const update = async (
  owner: string,
  canceledSO: StandingOrder & { owner: string }
): Promise<DocumentDefinition<void> | DocumentDefinition<void>[] | null> => {
  return StandingOrdersModel.update(
    { owner, solarisId: canceledSO.solarisId },
    {
      $set: canceledSO,
    }
  )
    .lean()
    .exec();
};
