import { SolarisPersonModel } from '../../model';

import { findOneBySolarisId } from '../findOneBySolarisId';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({
  exec: mockExec,
}));

const mockQuery = {
  lean: mockLean,
};

describe('find one by solarisId method', () => {
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
    findOneBySolarisId('solarisId');
    expect(SolarisPersonModel.findOne).toBeCalledWith({
      solarisId: 'solarisId',
    });
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
