import { DocumentDefinition } from "mongoose";
import {
  TradingVolumeHistoryDoc,
} from "@bitwala-cryptobank-squad/package-schemas";

import { TradingVolumeHistoryModel } from "../model";

export const updateProcessedForVolumeForIds = (
  ids: ReadonlyArray<string>,
  processedForVolumeAt: Date
): Promise<DocumentDefinition<TradingVolumeHistoryDoc> | DocumentDefinition<TradingVolumeHistoryDoc>[] | null> => {
  return TradingVolumeHistoryModel.updateMany(
    {
      _id: {
        $in: ids
      },
    },
    {
      $set: {
        processedForVolumeAt
      },
    },
    { runValidators: true }
  )
    .lean()
    .exec();
};
