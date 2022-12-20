import { UserModel } from "../../model";

import { updateRollingTradingVolume } from "../updateRollingTradingVolume";

const mockFindOneAndUpdate = jest.fn().mockImplementation(() => ({
  lean: () => ({
    exec: jest.fn(),
  }),
}));

describe("updateRollingTradingVolume", () => {
  beforeAll(() => {
    jest
      .spyOn(UserModel, "findOneAndUpdate")
      .mockImplementation(mockFindOneAndUpdate);
  });

  afterEach(jest.clearAllMocks);
  afterAll(jest.restoreAllMocks);

  it("should update rolling trading volume", async () => {
    const amount = 1000;
    await updateRollingTradingVolume("testUserId", amount);

    expect(mockFindOneAndUpdate).toHaveBeenCalledWith(
      {
        _id: "testUserId",
      },
      {
        $set: {
          rollingTradingVolume: amount,
        },
      },
      { runValidators: true }
    );
  });
});
