import { SolarisSeizureInput } from '@bitwala-cryptobank-squad/package-schemas';
import { SolarisSeizureModel } from '../../model';
import { upsertSeizure } from '../upsertSeizure';

const mockSeizure = {
  owner: 'userId',
  solarisId: '211c5c2f34ac442ff6f93d09fc8fb3edseiz',
  deliveryDate: '2019-01-31',
  enactmentDate: '2019-01-28',
  authorityName: 'Court',
  resolutionCaseNumber: 'Number 212121212',
  seizureType: 'COURT_SEIZURE',
  status: 'ACTIVE',
  amount: {
    value: 42,
    unit: 'cents',
    currency: 'EUR',
  },
  additionalCost: {
    value: 42,
    unit: 'cents',
    currency: 'EUR',
  },
  debtor: {
    name: 'Ben Wiseley',
    address: 'Wisestrasse 34',
    postalCode: '10249',
    city: 'Berlin',
    country: 'DE',
    state: 'BE',
  },
  creditor: {
    name: 'Betflix LLC',
    address: 'Bethousestrasse 43',
    postalCode: '10409',
    city: 'Berlin',
    country: 'DE',
    state: 'BE',
    iban: 'DE72110101001000014344',
  },
  creditorRepresentative: {
    name: 'Lawyer LLC',
    address: 'Gunsterstrasse 22',
    postalCode: '10409',
    city: 'Berlin',
    country: 'DE',
    state: 'BE',
    caseNumber: '42ABC-2',
    iban: 'DE72110101001000014344',
  },
  customerId: 'da682230fb56352dcf471aa13cc4a37ecper',
  customerType: 'Person',
};

const mockExec = jest.fn();

describe('upsertSeizure method', () => {
  beforeAll(() => {
    jest.spyOn(SolarisSeizureModel, 'findOneAndUpdate').mockImplementation(
      () =>
        ({
          exec: mockExec,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any)
    );
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should call findOneAndUpdate by solarisId, $set the payload, and set params', () => {
    upsertSeizure(mockSeizure as SolarisSeizureInput);
    expect(SolarisSeizureModel.findOneAndUpdate).toBeCalledWith(
      {
        solarisId: mockSeizure.solarisId,
      },
      {
        $set: mockSeizure,
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
        setDefaultsOnInsert: true,
      }
    );
    expect(mockExec).toBeCalledWith();
  });
});
