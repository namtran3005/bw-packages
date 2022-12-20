import { remove } from '../remove';
import { SolarisDeviceRestrictedModel } from '../../model';

describe('Remove a device', () => {
  const mockDate = new Date('2021-01-01');
  const RealDate = Date;
  const stubExec = jest.fn();
  const stubLean = jest.fn(() => ({ exec: stubExec }));
  const stubFindOneAndUpdate = { lean: stubLean };
  const spyFindOneAndUpdate = jest.spyOn(
    SolarisDeviceRestrictedModel,
    'findOneAndUpdate'
  );
  const dummySelector = {
    owner: 'dummy-owner-id',
    deviceId: 'dummy-deviceId',
  };
  const dummyUpdateArg = { $set: { deletedAt: mockDate } };

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
    remove(dummySelector);
    expect(spyFindOneAndUpdate).toBeCalledWith(dummySelector, dummyUpdateArg, {
      new: true,
      runValidators: true,
    });
    expect(stubLean).toBeCalled();
    expect(stubExec).toBeCalled();
  });
});
