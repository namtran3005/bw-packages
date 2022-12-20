import { SolarisPersonModel } from '../../model';

import { findManyPersonsByOwner } from '../findManyPersonsByOwner';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({
  exec: mockExec,
}));

const mockQuery = {
  lean: mockLean,
};

describe('find many persons by owner method', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisPersonModel, 'find')
      .mockImplementation(() => mockQuery as any); // eslint-disable-line @typescript-eslint/no-explicit-any
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use find with lean and return a promise', () => {
    findManyPersonsByOwner(['SATOSHI', 'NAKAMOTO']);
    expect(SolarisPersonModel.find).toBeCalledWith({
      owner: { $in: ['SATOSHI', 'NAKAMOTO'] },
    });
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
