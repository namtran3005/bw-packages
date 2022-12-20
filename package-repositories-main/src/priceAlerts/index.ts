import { fetchIds } from './lib/fetchIds';
import { insert } from './lib/insert';
import { drop } from './lib/drop';
import { fetchWithUserCursor } from './lib/fetchWithUserCursor';
import { changeStatus } from './lib/changeStatus';
import { fetchByUserId } from './lib/fetchByUserId';
import { countByUserId } from './lib/countByUserId';
import { deleteMany } from './lib/deleteMany';
import { fetchWithUserBatchedCursor } from './lib/fetchWithUserBatchedCursor';
import { findStuckAlerts } from './lib/findStuckAlerts';
import { fetchByType } from './lib/fetchByType';
import { findById } from './lib/findById';

export { PriceAlertsModel } from './model';

export const priceAlertRepo = {
  drop,
  insert,
  fetchIds,
  changeStatus,
  fetchWithUserCursor,
  fetchByUserId,
  countByUserId,
  deleteMany,
  fetchWithUserBatchedCursor,
  findStuckAlerts,
  fetchByType,
  findById,
};
