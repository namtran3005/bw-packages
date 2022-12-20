import { insertStandingOrder } from './lib/insertStandingOrder';
import { findStandingOrders } from './lib/findStandingOrders';
import { update } from './lib/update';
import { mergeOneStandingOrder } from './lib/mergeOneStandingOrder';
import { findOneById } from './lib/findOneById';
import { findAutoBuyStandingOrders } from './lib/findAutoBuyStandingOrders';
import { findStandingOrdersForUpcomingSection } from './lib/findStandingOrdersForUpcomingSection';

export { StandingOrdersModel } from './model';

export const standingOrdersRepo = {
  insert: insertStandingOrder,
  findStandingOrders,
  update,
  mergeOne: mergeOneStandingOrder,
  findOneById,
  findAutoBuyStandingOrders,
  findStandingOrdersForUpcomingSection,
};
