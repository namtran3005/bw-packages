import { findByOwner } from '../findByOwner';
import { SolarisDeviceModel } from '../../model';

describe('Find user device', () => {
  const stubExec = jest.fn();
  const stubLean = jest.fn(() => ({ exec: stubExec }));
  const stubFindOne = { lean: stubLean };
  const spyFind = jest
    .spyOn(SolarisDeviceModel, 'findOne')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .mockImplementation(() => stubFindOne as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use findOne', () => {
    findByOwner('dummy-owner-id');
    expect(spyFind).toBeCalledWith({
      owner: 'dummy-owner-id',
      deletedAt: { $exists: false },
    });
    expect(stubLean).toBeCalled();
    expect(stubExec).toBeCalled();
  });
});
