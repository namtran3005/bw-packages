import type { DocumentDefinition } from "mongoose";
import { logger } from "@bitwala-cryptobank-squad/package-logger";
import { tradingVolumeHistoryRepo } from "@bitwala-cryptobank-squad/package-repositories-main";
import { OrderDoc, TradingVolumeHistoryType, UserDoc } from "@bitwala-cryptobank-squad/package-schemas";

import { calculateVolumesDiff } from "./utils";

const log = logger('MONETIZATION_COMMON_INSERT_TRADING_VOLUME_HISTORY');

export const insertTradingVolumeHistoryRecord = async (
  order: DocumentDefinition<OrderDoc>,
  user: DocumentDefinition<UserDoc>
) => {
  try {
    const { previousVolume, updatedVolume } = calculateVolumesDiff(order, user);

    await tradingVolumeHistoryRepo.insert({
      previousTradingVol: previousVolume,
      newTradingVol: updatedVolume,
      orders: [order._id],
      owner: user._id,
      type: TradingVolumeHistoryType.INCREASE,
      insertedAt: new Date(),
    });
  } catch (error) {
    log.error(
      `Failed to insert tradingVolumeHistory for user ${user._id}.`,
      error,
    );
    throw error;
  }
};