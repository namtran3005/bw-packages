/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisBookingModel } from '../../model';
import { upsertBooking } from '../upsertBooking';

const mockBooking = {
  solarisId: 'solarisId',
  foo: 'bar',
};

const mockExec = jest.fn();

describe('upsertBooking method', () => {
  beforeAll(() => {
    jest.spyOn(SolarisBookingModel, 'findOneAndUpdate').mockImplementation(
      () =>
        ({
          exec: mockExec,
        } as any)
    );
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should call findOneAndUpdate by solarisId, $set the payload, and set params', () => {
    upsertBooking(mockBooking as any);
    expect(SolarisBookingModel.findOneAndUpdate).toBeCalledWith(
      {
        solarisId: mockBooking.solarisId,
      },
      {
        $set: mockBooking,
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
        setDefaultsOnInsert: true,
      }
    );
    expect(mockExec).toBeCalledWith();
  });
});
