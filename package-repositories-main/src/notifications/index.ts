import { insertNotification } from './lib/insertNotification';
import { fetchByEvent } from './lib/fetchByEvent';
import { insertMany } from './lib/insertMany';

export { NotificationsModel } from './model';

export const notificationsRepo = {
  insert: insertNotification,
  insertMany,
  fetchByEvent,
};
