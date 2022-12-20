import { StandingOrderDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { StandingOrderStatus } from '@bitwala-cryptobank-squad/package-solaris';
import { DocumentDefinition } from 'mongoose';
import { StandingOrdersModel } from '../model';

export const findStandingOrders = async (
  owner: string
): Promise<DocumentDefinition<StandingOrderDoc>[]> => {
  return StandingOrdersModel.find(
    {
      owner,
      status: { $ne: StandingOrderStatus.CANCELED },
      //Don't return autobuy standing orders
      clearingProfileId: { $exists: false },
    },
    null,
    {
      $sort: { createdAt: -1 },
    }
  )
    .lean()
    .exec();
};
