/* eslint-disable @typescript-eslint/no-explicit-any */
import { findAllByOwner } from '../findAllByOwner';
import { SepaSavedRecipientModel } from '../../model';

const mockFindVal: any = {
  sort: jest.fn().mockImplementation(() => mockFindVal),
  lean: jest.fn().mockImplementation(() => mockFindVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('Get all recipients belongs to user', () => {
  beforeAll(() => {
    jest
      .spyOn(SepaSavedRecipientModel, 'find')
      .mockImplementation(() => mockFindVal);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use find with sorted and lean and return a promise', async () => {
    const res = await findAllByOwner('id');
    expect(SepaSavedRecipientModel.find).toBeCalledWith({ owner: 'id' });
    expect(mockFindVal.sort).toBeCalledWith({ name: 1 });
    expect(mockFindVal.lean).toBeCalled();
    expect(mockFindVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
