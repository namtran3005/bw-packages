/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisBookingModel } from '../../model';
import { findOneById } from '../findOneById';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockQuery = { lean: mockLean };

describe('find booking by id', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisBookingModel, 'findOne')
      .mockImplementation(() => mockQuery as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should lookup booking by id, use lean and return a promise', () => {
    findOneById('id');
    expect(SolarisBookingModel.findOne).toBeCalledWith({ _id: 'id' });
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
