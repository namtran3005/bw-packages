import { SolarisPersonModel } from '../../model';

import { findOneByFirstNameAndLastName } from '../findOneByFirstNameAndLastName';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({
  exec: mockExec,
}));

const mockQuery = {
  lean: mockLean,
};

describe('find one by first name and last name method', () => {
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
    findOneByFirstNameAndLastName('SATOSHI', 'NAKAMOTO');
    expect(SolarisPersonModel.findOne).toBeCalledWith({
      firstName: 'SATOSHI',
      lastName: 'NAKAMOTO',
    });
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
