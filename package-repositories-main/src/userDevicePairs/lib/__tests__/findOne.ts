import { findOne } from '../findOne';
import { UserDevicePairsModel, DevicePairingStatus } from '../../model';

describe('Find the paired device doc', () => {
  // Arrange
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mockFindOneVal: any = {
    lean: jest.fn().mockImplementation(() => mockFindOneVal),
    sort: jest.fn().mockImplementation(() => mockFindOneVal),
    exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
  }
  const spyFindOne = jest
    .spyOn(UserDevicePairsModel, 'findOne')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .mockImplementation(() => mockFindOneVal as any);
  const dummySelector = {
    owner: 'dummy-owner-id',
    deviceId: 'dummy-device-id',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use find with lean and return a promise', () => {
    findOne(dummySelector);
    expect(spyFindOne).toBeCalledWith({
      ...dummySelector,
      status: DevicePairingStatus.ACTIVE,
    });
    expect(mockFindOneVal.lean).toBeCalled();
    expect(mockFindOneVal.exec).toBeCalled();
  });
});
