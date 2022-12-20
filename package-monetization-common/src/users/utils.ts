import Big from "big.js";
import type { DocumentDefinition } from "mongoose";
import { OrderDoc, UserDoc } from "@bitwala-cryptobank-squad/package-schemas";

import { ROLLING_TRADING_VOLUME_PRECISION } from "../constants";
import { Currency } from "../types";

export const calculateVolumesDiff = (
  order: DocumentDefinition<OrderDoc>,
  user: DocumentDefinition<UserDoc>
) => {
  const orderEurAmount =
    order.input.currency == Currency.EUR
      ? order.input.amount
      : order.output.amount;
  const prevRollingTradingVolume = Big(user.rollingTradingVolume ?? 0);
  const newRollingTradingVolume = prevRollingTradingVolume.plus(
    orderEurAmount
  );

  const previousVolume = Number(
    prevRollingTradingVolume.toFixed(ROLLING_TRADING_VOLUME_PRECISION)
  );
  const updatedVolume = Number(
    newRollingTradingVolume.toFixed(ROLLING_TRADING_VOLUME_PRECISION)
  );

  return {
    previousVolume,
    updatedVolume,
  }
};