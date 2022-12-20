import { StandingOrderDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { StandingOrder } from '@bitwala-cryptobank-squad/package-solaris';
import { DocumentDefinition } from 'mongoose';
import { StandingOrdersModel } from '../model';

export const mergeOneStandingOrder = (
  solarisStandingOrderId: string,
  data: StandingOrder
): Promise<DocumentDefinition<StandingOrderDoc> | null> => {
  return StandingOrdersModel.findOneAndUpdate(
    { solarisId: solarisStandingOrderId },
    { $set: data },
    { runValidators: true }
  )
    .lean()
    .exec();
};
