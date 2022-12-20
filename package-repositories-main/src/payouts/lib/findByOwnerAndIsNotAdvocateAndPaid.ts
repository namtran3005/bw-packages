import { PayoutDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { PayoutsModel, PayoutStatus } from '../model';

export const findByOwnerAndIsNotAdvocateAndPaid = (
  userId: string
): Promise<DocumentDefinition<PayoutDoc>[]> => {
  return PayoutsModel.find({
    owner: userId,
    isAdvocate: false,
    status: PayoutStatus.PAID,
  })
    .lean()
    .exec();
};
