import { NotificationsModel, Variables } from '../model';

export interface NotificationCreate {
  userId: string;
  event: string;
  email: boolean;
  push: boolean;
  variables: Variables;
}

export const insertMany = (notifications: NotificationCreate[]) => {
  return NotificationsModel.insertMany(notifications);
};
