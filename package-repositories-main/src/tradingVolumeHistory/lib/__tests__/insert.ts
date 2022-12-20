/* eslint-disable @typescript-eslint/no-explicit-any */
import { TradingVolumeHistoryType } from "@bitwala-cryptobank-squad/package-schemas";
import { TradingVolumeHistoryModel } from "../../model";
import { insert } from "../insert";

const mockInput = {
  orders: ["5bc344231453f300703b8a2b", "5bc348aa1453f300703b8a38"],
  owner: "T0",
  newTradingVol: 0,
  previousTradingVol: 10000,
  type: TradingVolumeHistoryType.DECREASE,
  insertedAt: new Date(),
};

const mockDoc = {
  ...mockInput,
  createdAt: "createdAt",
};

describe("insert trading volume history record", () => {
  beforeAll(() => {
    jest
      .spyOn(TradingVolumeHistoryModel, "create")
      .mockImplementation(() => Promise.resolve(mockDoc) as any);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("should insert doc", async () => {
    const response = await insert(mockInput);

    expect(TradingVolumeHistoryModel.create).toBeCalledWith(mockInput);

    expect(response).toBe(mockDoc);
  });
});
