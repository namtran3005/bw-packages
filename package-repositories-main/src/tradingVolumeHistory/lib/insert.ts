import { DocumentDefinition } from "mongoose";
import {
  TradingVolumeHistory,
  TradingVolumeHistoryDoc,
} from "@bitwala-cryptobank-squad/package-schemas";

import { TradingVolumeHistoryModel } from "../model";

export const insert = (
  data: TradingVolumeHistory
): Promise<DocumentDefinition<TradingVolumeHistoryDoc> | null> => {
  return TradingVolumeHistoryModel.create(data);
};
