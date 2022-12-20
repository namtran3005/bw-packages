import {
  TradingVolumeHistoryDoc,
  TradingVolumeHistoryType,
} from "@bitwala-cryptobank-squad/package-schemas";

import { TradingVolumeHistoryModel } from "../model";
import { createFindProjection } from "../../utils";

export const defaultProjectedFields = [
  "id",
  "owner",
  "orders",
  "previousTradingVol",
  "newTradingVol",
  "insertedAt",
  "processedForVolumeAt",
  "type",
] as const;

type DefaultFields = typeof defaultProjectedFields[number];

export interface FindTradingVolumeHistoryOptions<T extends keyof TradingVolumeHistoryDoc> {
  owner?: string;
  insertedAtCutoffDate?: Date;
  type?: TradingVolumeHistoryType;
  projectionFields?: T[];
}

/**
 * Queries the tradingVolumeHistory records with the supplied filters. Only records that have
 * no processedForVolumeAt value will be considered
 * 
 * @param options 
 * @returns tradingVolumeHistory records with the fields specified in the projection
 */
export const findAllUnprocessedForVolume = async <T extends keyof TradingVolumeHistoryDoc = DefaultFields>(
  options: FindTradingVolumeHistoryOptions<T> = {}
): Promise<Pick<TradingVolumeHistoryDoc, T>[]> => {

  const outProjection = createFindProjection(
    (options.projectionFields as string[]) ?? defaultProjectedFields
  );

  const tradingHistoryVolumeQuery = Object.assign(
    {
      processedForVolumeAt: {
        $eq: null,
      },
    },
    options.owner && {
      owner: {
        $eq: options.owner,
      },
    },
    options.insertedAtCutoffDate && {
      insertedAt: {
        $lte: options.insertedAtCutoffDate,
      },
    },
    options.type && {
      type: {
        $eq: options.type,
      },
    }
  );

  return TradingVolumeHistoryModel.find(
    tradingHistoryVolumeQuery,
    outProjection
  ).lean<Pick<TradingVolumeHistoryDoc, T>>().exec();
};
