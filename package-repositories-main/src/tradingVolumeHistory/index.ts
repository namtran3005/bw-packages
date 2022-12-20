import { insert } from './lib/insert';
import { findAllUnprocessedForVolume } from './lib/findAllUnprocessedForVolume';
import { updateProcessedForVolumeForIds } from './lib/updateProcessedForVolumeForIds';

export { TradingVolumeHistoryModel } from './model';

export const tradingVolumeHistoryRepo = {
  insert,
  findAllUnprocessedForVolume,
  updateProcessedForVolumeForIds,
};
