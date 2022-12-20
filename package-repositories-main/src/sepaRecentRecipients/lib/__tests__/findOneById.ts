/* eslint-disable @typescript-eslint/no-explicit-any */
import { findOneById } from '../findOneById';
import { SepaRecentRecipientModel } from '../../model';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockQuery = { lean: mockLean };

describe('Get a recent recipient for given id', () => {
  beforeAll(() => {
    jest
      .spyOn(SepaRecentRecipientModel, 'findOne')
      .mockImplementation(() => mockQuery as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use find with lean and return a promise', () => {
    findOneById('id');
    expect(SepaRecentRecipientModel.findOne).toBeCalledWith({ _id: 'id' });
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
