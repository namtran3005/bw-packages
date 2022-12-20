import { findByOwnerAndDeviceName } from '../findByOwnerAndDeviceName';
import { SolarisDeviceRestrictedModel } from '../../model';

describe('Find user device', () => {
  const stubExec = jest.fn();
  const stubLean = jest.fn(() => ({ exec: stubExec }));
  const stubFindOne = { lean: stubLean };
  const spyFind = jest
    .spyOn(SolarisDeviceRestrictedModel, 'findOne')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .mockImplementation(() => stubFindOne as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use findOne', () => {
    findByOwnerAndDeviceName('dummy-user-id', 'device-name-id', 'device-id');
    expect(spyFind).toBeCalledWith({
      owner: 'dummy-user-id',
      name: 'device-name-id',
      deviceId: 'device-id',
      deletedAt: { $exists: false },
    });
    expect(stubLean).toBeCalled();
    expect(stubExec).toBeCalled();
  });
});
