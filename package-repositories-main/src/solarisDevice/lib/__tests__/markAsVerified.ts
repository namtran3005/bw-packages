import { markAsVerified } from '../markAsVerified';
import { SolarisDeviceModel } from '../../model';

describe('Mark verified a device', () => {
  const mockDate = new Date('2021-01-01');
  const RealDate = Date;
  const stubExec = jest.fn();
  const stubLean = jest.fn(() => ({ exec: stubExec }));
  const stubFindOneAndUpdate = { lean: stubLean };
  const spyFindOneAndUpdate = jest.spyOn(
    SolarisDeviceModel,
    'findOneAndUpdate'
  );

  const dummyDeviceId = 'dummy-device-id';
  const dummyUpdateArg = { $set: { successfullyVerifiedAt: mockDate } };

  beforeAll(() => {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    spyFindOneAndUpdate.mockImplementation(() => stubFindOneAndUpdate as any);
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    global.Date = jest.fn(() => mockDate);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
    global.Date = RealDate;
  });

  it('should use findOneAndUpdate method', () => {
    markAsVerified(dummyDeviceId);
    expect(spyFindOneAndUpdate).toBeCalledWith(
      { deviceId: dummyDeviceId },
      dummyUpdateArg,
      {
        new: false,
        runValidators: true,
      }
    );
    expect(stubLean).toBeCalled();
    expect(stubExec).toBeCalled();
  });
});
