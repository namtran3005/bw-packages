/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisTaxIdentificationModel } from '../../model';

import { insertTaxIdentification } from '../insertTaxIdentification';

const mockTaxIdentification = {
  solarisId: 'solarisId',
  owner: 'ownerId',
  country: 'DE',
  number: '0123456789',
  primary: true,
};

describe('insert solaris tax identification method', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisTaxIdentificationModel, 'create')
      .mockImplementation(x => x);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use mode.create to insert a doc', () => {
    const res = insertTaxIdentification(mockTaxIdentification as any);
    expect(SolarisTaxIdentificationModel.create).toBeCalledWith(
      mockTaxIdentification
    );
    expect(res).toBe(mockTaxIdentification);
  });
});
