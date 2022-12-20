/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisBookingModel } from '../../model';
import { findEtfTransaction } from '../findEtfTransaction';

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
    findEtfTransaction('id');
    expect(SolarisBookingModel.findOne).toBeCalledWith({ description: 'id' });
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
