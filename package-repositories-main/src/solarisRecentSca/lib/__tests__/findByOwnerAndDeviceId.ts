import { findByOwnerAndDeviceId } from '../findByOwnerAndDeviceId';
import { SolarisRecentScaModel } from '../../model';

describe('findByOwnerAndDeviceId', () => {
  const stubExec = jest.fn();
  const stubLean = jest.fn(() => ({ exec: stubExec }));
  const stubFindOne = { lean: stubLean };
  const spyFindOne = jest
    .spyOn(SolarisRecentScaModel, 'findOne')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .mockImplementation(() => stubFindOne as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use findOne', async () => {
    const dummyId = 'dummy-user-id';
    const deviceId = 'dummy-device-id';
    await findByOwnerAndDeviceId(dummyId, deviceId);
    expect(spyFindOne).toBeCalledWith({
      owner: dummyId,
      deviceId: deviceId
    });
    expect(stubLean).toBeCalled();
    expect(stubExec).toBeCalled();
  });
});
