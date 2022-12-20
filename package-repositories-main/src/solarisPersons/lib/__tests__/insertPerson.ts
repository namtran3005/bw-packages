/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisPersonModel } from '../../model';

import { insertPerson } from '../insertPerson';

const mockPerson = { solarisId: 'solarisId' };

describe('insert solaris person method', () => {
  beforeAll(() => {
    jest.spyOn(SolarisPersonModel, 'create').mockImplementation(x => x);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use mode.create to insert a doc', () => {
    const res = insertPerson(mockPerson as any);
    expect(SolarisPersonModel.create).toBeCalledWith(mockPerson);
    expect(res).toBe(mockPerson);
  });
});
