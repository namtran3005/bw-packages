import { SolarisPersonModel } from '../../model';

import { getETFUserData } from '../getETFUserData';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({
  exec: mockExec,
}));

const mockQuery = {
  lean: mockLean,
};

describe('get ETF user data method', () => {
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
    getETFUserData('owner');
    expect(SolarisPersonModel.find).toBeCalledWith(
      {
        owner: 'owner',
      },
      {
        firstName: 1,
        lastName: 1,
        email: 1,
        salutation: 1,
        address: 1,
        birthCountry: 1,
        birthCity: 1,
        birthDate: 1,
        nationality: 1,
        solarisId: 1,
      }
    );
  });
});
