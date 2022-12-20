import { unpair } from '../unpair';
import { UserDevicePairsModel, DevicePairingStatus } from '../../model';

describe('Remove a recipient', () => {
  // Arrange
  const stubExec = jest.fn();
  const stubLean = jest.fn(() => ({ exec: stubExec }));
  const stubUpdateMany = { lean: stubLean };
  const spyUpdateMany = jest.spyOn(
    UserDevicePairsModel,
    'updateMany'
  );
  const dummySelector = {
    owner: 'dummy-owner-id',
    deviceId: 'dummy-device-id',
  };
  const dummyUpdateArg = { $set: { status: 'INACTIVE' } };

  beforeAll(() => {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    spyUpdateMany.mockImplementation(() => stubUpdateMany as any);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use deleteOne method', () => {
    unpair(dummySelector);
    expect(spyUpdateMany).toBeCalledWith(
      { ...dummySelector, status: DevicePairingStatus.ACTIVE },
      dummyUpdateArg
    );
    expect(stubLean).toBeCalled();
    expect(stubExec).toBeCalled();
  });
});
