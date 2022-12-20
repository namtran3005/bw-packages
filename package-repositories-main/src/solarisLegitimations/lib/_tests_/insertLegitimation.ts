/* eslint-disable @typescript-eslint/no-explicit-any */
import { LegitimationType } from '@bitwala-cryptobank-squad/package-solaris';
import { SolarisLegitimationsModel } from '../../model';
import { insertLegitimation } from '../insertLegitimation';

const mockLegitimation = {
  owner: 'userId',
  createdAt: 'createdAt',
  legitimationDocumentNumber: 'legitimationDocumentNumber',
  legitimationType: LegitimationType.PASSPORT,
  legitimationIssuer: 'legitimationIssuer',
  legitimationCountry: 'legitimationCountry',
  legitimationIssuedAt: new Date('2020-05-05'),
  legitimationValidUntil: new Date('2026-05-05'),
};

describe('insertLegitimation', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisLegitimationsModel, 'create')
      .mockImplementation(() => Promise.resolve(mockLegitimation) as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use create method and return the promise', async () => {
    const res = await insertLegitimation(mockLegitimation as any);
    expect(SolarisLegitimationsModel.create).toBeCalledWith(mockLegitimation);
    expect(res).toBe(mockLegitimation);
  });
});
