import { insertHourlySnapshot } from './lib/insertHourlySnapshot';
import { insertDailySnapshot } from './lib/insertDailySnapshot';
import { insertWeeklySnapshot } from './lib/insertWeeklySnapshot';
import { findHourlySnapshots } from './lib/findHourlySnapshots';
import { findDailySnapshots } from './lib/findDailySnapshots';
import { findWeeklySnapshots } from './lib/findWeeklySnapshots';
import { findNearestHourlySnapshot } from './lib/findNearestHourlySnapshot';
import { findNearestDailySnapshot } from './lib/findNearestDailySnapshot';
import { findNearestWeeklySnapshot } from './lib/findNearestWeeklySnapshot';

export {
  PortfolioSnapshotHourlyModel,
  PortfolioSnapshotDailyModel,
  PortfolioSnapshotWeeklyModel,
} from './model';

export const portfolioSnapshotsRepo = {
  insertHourlySnapshot,
  insertDailySnapshot,
  insertWeeklySnapshot,
  findHourlySnapshots,
  findDailySnapshots,
  findWeeklySnapshots,
  findNearestHourlySnapshot,
  findNearestDailySnapshot,
  findNearestWeeklySnapshot,
};
