import * as Mongoose from 'mongoose';
import humps from 'humps';
import rename from 'deep-rename-keys-ts';
import { Seizure } from '@bitwala-cryptobank-squad/package-solaris';
import { solarisSeizureSchema } from '../solarisSeizures';

// eslint-disable-next-line jest/no-export, @typescript-eslint/no-explicit-any
export const parseWebhookBody = (payload: any) =>
  humps.camelizeKeys(
    rename(payload, (k: string) => (k === 'id' ? 'solarisId' : k))
  );

describe('Solaris seizures', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it('should validate successfully sample webhook payload', () => {
    const payload = {
      amount: { value: 0, unit: 'cents', currency: 'EUR' },
      customer_type: 'Person',
      seizure_type: 'ATTACHMENT',
      delivery_date: '2019-07-10',
      creditor: {
        name: 'Creditor Name',
        address: null,
        postal_code: null,
        city: null,
        country: null,
        state: null,
        iban: '',
      },
      status: 'ACTIVE',
      id: 'solaris seizure id',
      enactment_date: '2019-07-10',
      authority_name: 'authority name',
      creditor_representative: {
        name: 'creditor rep name',
        address: 'address',
        postal_code: '27283',
        city: 'city',
        country: null,
        state: null,
        case_number: 'case number',
        iban: '',
      },
      debtor: {
        name: null,
        address: null,
        postal_code: null,
        city: null,
        country: null,
        state: null,
      },
      additional_cost: { value: 0, unit: 'cents', currency: 'EUR' },
      customer_id: 'solaris customer id',
      resolution_case_number: 'resolution case number',
      automatic_payout_date: '2019-07-10',
      insolvency: false,
      automated: false,
      country: false,
      social_benefits: false,
      seizure_protected: false,
      multiple_drittschuldner: true,
    };

    const SeizureModel = Mongoose.model('SeizureModel', solarisSeizureSchema);

    const seizure: Seizure & { owner: string } = {
      ...parseWebhookBody(payload) as any,
      owner: 'user id',
    };
    const solarisSeizure = new SeizureModel(seizure);

    const errors = solarisSeizure.validateSync();

    expect(errors).toBeUndefined();
  });
});
