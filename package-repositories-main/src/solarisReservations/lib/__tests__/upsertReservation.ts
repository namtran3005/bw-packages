/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisReservationModel } from '../../model';
import { upsertReservation } from '../upsertReservation';

const mockReservation = {
  solarisId: 'solarisId',
  foo: 'bar',
};

const mockExec = jest.fn();

describe('upsertReservation method', () => {
  beforeAll(() => {
    jest.spyOn(SolarisReservationModel, 'findOneAndUpdate').mockImplementation(
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
    upsertReservation(mockReservation as any);
    expect(SolarisReservationModel.findOneAndUpdate).toBeCalledWith(
      {
        solarisId: mockReservation.solarisId,
      },
      {
        $set: mockReservation,
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
