/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisReservationModel } from '../../model';
import { findOneById } from '../findOneById';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockQuery = { lean: mockLean };

describe('find reservation by id', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisReservationModel, 'findOne')
      .mockImplementation(() => mockQuery as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should lookup reservation by id, use lean and return a promise', () => {
    findOneById('id');
    expect(SolarisReservationModel.findOne).toBeCalledWith({ _id: 'id' });
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
