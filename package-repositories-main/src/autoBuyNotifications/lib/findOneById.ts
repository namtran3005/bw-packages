import { AutoBuyNotificationsDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { AutoBuyNotificationsModel } from '../model';

export const findOneById = (
  id: string
): Promise<DocumentDefinition<AutoBuyNotificationsDoc> | null> => {
  return AutoBuyNotificationsModel.findOne({ _id: id })
    .lean()
    .exec();
};
