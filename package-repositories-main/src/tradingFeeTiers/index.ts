import { upsert } from './lib/upsert';
import { getAll } from "./lib/get-all";
import { getByVolume } from "./lib/get-by-volume";
import { getByTierId } from "./lib/get-by-tier-id";

export { TradingFeeTierModel } from './model';

export const tradingFeeTiersRepo = {
  upsert,
  getAll,
  getByVolume,
  getByTierId
};
