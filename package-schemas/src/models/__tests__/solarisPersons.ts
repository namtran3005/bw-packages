import * as Mongoose from 'mongoose';
import humps from 'humps';
import rename from 'deep-rename-keys-ts';
import { solarisPersonSchema } from '../solarisPersons';

// eslint-disable-next-line jest/no-export, @typescript-eslint/no-explicit-any
const parseWebhookBody = (payload: any) =>
  humps.camelizeKeys(
    rename(payload, (k: string) => (k === 'id' ? 'solarisId' : k))
  );

describe('Solaris persons', () => {
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
      id: 'ae01cbcef2a9b37758ad39f20811e6f9cper',
      salutation: 'MR',
      title: null,
      first_name: 'HAPPYPATH',
      last_name: 'SAwpQoXPusYgCAz',
      address: {
        line_1: 'Striwitzweg',
        line_2: '6b',
        postal_code: '14513',
        city: 'Teltow',
        country: 'DE',
        state: 'BB',
      },
      contact_address: {
        line_1: null,
        line_2: null,
        postal_code: null,
        city: null,
        country: null,
        state: null,
      },
      email: 'person@example.com',
      mobile_number: '+4900000000000',
      birth_name: null,
      birth_date: '1972-12-14',
      birth_city: 'Berlin',
      birth_country: 'DE',
      nationality: 'DE',
      employment_status: 'EMPLOYED',
      job_title: null,
      tax_information: {
        tax_assessment: null,
        marital_status: 'UNKNOWN',
      },
      fatca_relevant: false,
      fatca_crs_confirmed_at: '2017-01-01T00:00:00.000Z',
      business_purpose: null,
      industry: 'DEBIT_BALANCE_SALARY_ACCOUNT',
      industry_key: 'ECONOMICALLY_DEPENDENT_INDIVIDUALS',
      terms_conditions_signed_at: '2017-01-01T00:00:00.000Z',
      own_economic_interest_signed_at: null,
      flagged_by_compliance: false,
      expected_monthly_revenue_cents: null,
      vat_number: null,
      website_social_media: null,
      business_trading_name: 'P1',
      nace_code: null,
      business_address_line_1: null,
      business_address_line_2: null,
      business_postal_code: null,
      business_city: null,
      business_country: null,
      screening_progress: 'NOT_SCREENED',
    };

    const SolarisPersonModel = Mongoose.model(
      'SolarisPersonModel',
      solarisPersonSchema
    );

    const person = {
      ...parseWebhookBody(payload),
      owner: 'userid',
    };
    const solarisPerson = new SolarisPersonModel(person);

    const errors = solarisPerson.validateSync();

    expect(errors).toBeUndefined();
  });
});
