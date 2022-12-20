import { NotificationDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { NotificationsModel, Variables } from '../model';

export interface NotificationCreate {
  userId: string;
  event: string;
  email: boolean;
  push: boolean;
  variables: Variables;
}

export const insertNotification = (
  notification: NotificationCreate
): Promise<NotificationDoc> => {
  return NotificationsModel.create(notification);
};
