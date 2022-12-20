/* eslint-disable @typescript-eslint/no-explicit-any */
import { findRecentRecipients } from '../findRecentRecipients';
import { SepaRecentRecipientModel } from '../../model';

const mockFindVal: any = {
  sort: jest.fn().mockImplementation(() => mockFindVal),
  limit: jest.fn().mockImplementation(() => mockFindVal),
  lean: jest.fn().mockImplementation(() => mockFindVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('Get all recent recipients belonging to user', () => {
  beforeAll(() => {
    jest
      .spyOn(SepaRecentRecipientModel, 'find')
      .mockImplementation(() => mockFindVal);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use find with sorted and lean and return a promise', async () => {
    const res = await findRecentRecipients('id', { limit: 3 });
    expect(SepaRecentRecipientModel.find).toBeCalledWith({ owner: 'id' });
    expect(mockFindVal.lean).toBeCalled();
    expect(mockFindVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
