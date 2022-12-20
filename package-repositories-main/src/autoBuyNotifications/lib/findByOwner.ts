import { AutoBuyNotificationsDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { AutoBuyNotificationsModel } from '../model';

export const findByOwner = (
  owner: string
): Promise<DocumentDefinition<AutoBuyNotificationsDoc>[]> => {
  return AutoBuyNotificationsModel.find({ owner })
    .lean()
    .exec();
};
