import { findByOwner } from './lib/findByOwner';
import { findByAutoBuyRuleId } from './lib/findByAutoBuyRuleId';
import { findOneById } from './lib/findOneById';
import { insert } from './lib/insert';

export { AutoBuyNotificationsModel } from './model';

export const autoBuyNotificationsRepo = {
  findByOwner,
  findByAutoBuyRuleId,
  findOneById,
  insert,
};
