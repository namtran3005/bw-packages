import { AutoBuyNotificationsDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { AutoBuyNotificationsModel } from '../model';

export const findByAutoBuyRuleId = (
  autoBuyRuleId: string
): Promise<DocumentDefinition<AutoBuyNotificationsDoc>[]> => {
  return AutoBuyNotificationsModel.find({ autoBuyRuleId })
    .lean()
    .exec();
};
