import { insertOrUpdate } from "../insertOrUpdate";
import { SolarisRecentScaModel } from "../../model";

describe("insertOrUpdate", () => {
  const stubExec = jest.fn();
  const stubLean = jest.fn(() => ({ exec: stubExec }));
  const stubFindOne = { lean: stubLean };
  const spyFindOneAndUpdate= jest
    .spyOn(SolarisRecentScaModel, "findOneAndUpdate")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .mockImplementation(() => stubFindOne as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("should call findOneAndUpdate", () => {
    const dummyId = "dummy-user-id";
    const dummyDeviceId = "dummy-device-id";
    insertOrUpdate(dummyId, dummyDeviceId);
    expect(spyFindOneAndUpdate).toBeCalledWith(
      {
        owner: dummyId,
        deviceId: dummyDeviceId,
      },
      {},
      {
        new: true,
        upsert: true,
        runValidators: true,
      }
    );
  });
});
