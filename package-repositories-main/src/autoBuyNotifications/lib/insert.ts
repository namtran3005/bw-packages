import {
  AutoBuyNotifications,
  AutoBuyNotificationsDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { AutoBuyNotificationsModel } from '../model';

export const insert = (
  data: AutoBuyNotifications
): Promise<AutoBuyNotificationsDoc> => {
  return AutoBuyNotificationsModel.create(data);
};
