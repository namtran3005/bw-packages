import * as Mongoose from "mongoose";
import { Error } from "mongoose";
import {
  tradingVolumeHistorySchema,
  TradingVolumeHistory,
  TradingVolumeHistoryType,
} from "../tradingVolumeHistory";

describe("tradingVolumeHistory", () => {
  it("should return errors as undefined after sync validation", () => {
    const historyRecord: TradingVolumeHistory = {
      orders: ["5bc344231453f300703b8a2b", "5bc348aa1453f300703b8a38"],
      owner: "T0",
      newTradingVol: 0,
      previousTradingVol: 10000,
      insertedAt: new Date(),
      type: TradingVolumeHistoryType.DECREASE
    };

    const Model = Mongoose.model(
      "TradingVolumeHistoryDocs",
      tradingVolumeHistorySchema
    );
    const historyModel = new Model(historyRecord);

    const error = historyModel.validateSync();
    expect(error).toBeUndefined();
  });

  it("should return error after sync validation when option is missing", () => {
    const historyRecordMissingOrders = {
      orders: [],
      owner: "T0",
      newTradingVol: 0,
      previousTradingVol: 10000,
      insertedAt: new Date(),
      type: TradingVolumeHistoryType.DECREASE
    } as TradingVolumeHistory;

    const Model = Mongoose.model(
      "TradingVolumeHistoryDocs",
      tradingVolumeHistorySchema
    );
    const historyModel = new Model(historyRecordMissingOrders);

    const error = historyModel.validateSync();
    expect(error).toBeInstanceOf(Error.ValidationError);
  });
});
