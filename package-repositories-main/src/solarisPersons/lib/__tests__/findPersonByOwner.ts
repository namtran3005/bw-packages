import { SolarisPersonModel } from '../../model';

import { findPersonByOwner } from '../findPersonByOwner';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({
  exec: mockExec,
}));

const mockQuery = {
  lean: mockLean,
};

describe('find person by owner method', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisPersonModel, 'findOne')
      .mockImplementation(() => mockQuery as any); // eslint-disable-line @typescript-eslint/no-explicit-any
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use findOne with lean and return a promise', () => {
    findPersonByOwner('owner');
    expect(SolarisPersonModel.findOne).toBeCalledWith({ owner: 'owner' });
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
