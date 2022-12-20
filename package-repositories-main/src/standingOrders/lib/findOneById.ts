import { StandingOrderDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { StandingOrdersModel } from '../model';

export const findOneById = (id: string): Promise<DocumentDefinition<StandingOrderDoc> | null> => {
  return StandingOrdersModel.findOne({ _id: id })
    .lean()
    .exec();
};
