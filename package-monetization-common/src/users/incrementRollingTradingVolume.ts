import type { DocumentDefinition } from "mongoose";
import { logger } from "@bitwala-cryptobank-squad/package-logger";
import { usersRepo } from "@bitwala-cryptobank-squad/package-repositories-main";
import { OrderDoc, UserDoc } from "@bitwala-cryptobank-squad/package-schemas";

import { calculateVolumesDiff } from "./utils";

const log = logger('MONETIZATION_COMMON_INCREMENT_ROLLING_TRADING_VOLUME');

export const incrementRollingTradingVolume = async (
  order: DocumentDefinition<OrderDoc>,
  user: DocumentDefinition<UserDoc>
) => {
  try {
    const { updatedVolume } = calculateVolumesDiff(order, user);

    await usersRepo.updateRollingTradingVolume(user._id, updatedVolume);
  } catch (error) {
    log.error(
      `Failed to update user ${user._id} rollingTradingVolume.`,
      error,
    );
    throw error;
  }
};