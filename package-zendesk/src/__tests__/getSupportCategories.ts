import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { resetAllWhenMocks, when, verifyAllWhenMocksCalled } from 'jest-when';
import zendeskAPI from 'node-zendesk';

import { getZendesk } from '..';

jest.mock('node-zendesk');

describe('zendesk package', () => {
  describe('getSupportCategories', () => {
    let zendesk: ReturnType<typeof getZendesk>;
    let showTicketFields: jest.Mock;
    let listAllDynamicContent: jest.Mock;

    beforeEach(() => {
      jest.resetAllMocks();
      resetAllWhenMocks();

      process.env.ZENDESK_API_URL = 'url';
      process.env.ZENDESK_API_TOKEN = 'token';
      process.env.ZENDESK_API_EMAIL = 'email';
      process.env.ZENDESK_CATEGORY_FIELD_ID = '123';
      process.env.ZENDESK_LOCALE_EN_ID = '1176';

      showTicketFields = jest.fn();
      listAllDynamicContent = jest.fn();
      when(
        (zendeskAPI.createClient as unknown) as jest.MockInstance<
          unknown,
          unknown[]
        >
      )
        .expectCalledWith({
          remoteUri: 'url',
          token: 'token',
          username: 'email',
        })
        .mockReturnValue({
          ticketfields: { show: showTicketFields },
          dynamiccontent: { listAllItems: listAllDynamicContent },
        });

      zendesk = getZendesk();
    });

    afterEach(verifyAllWhenMocksCalled);

    test('method returns expected data structure', async () => {
      when(showTicketFields)
        .calledWith(123)
        .mockResolvedValue({
          custom_field_options: [
            {
              id: 360025875519,
              name: 'Account Opening:: Verification:: Address',
              raw_name:
                '{{dc.type_of_enquiry-_account_opening}}:: {{dc.type_of_enquiry-_account_opening-_address_verification}}:: {{dc.type_of_enquiry-_address}}',
            },
            {
              id: 360023847380,
              name: 'Account Opening:: Verification:: Person',
              raw_name:
                '{{dc.type_of_enquiry-_account_opening}}:: {{dc.type_of_enquiry-_account_opening-_address_verification}}:: {{dc.type_of_enquiry-_account_opening-_address_verification-_person}}',
            },
            {
              id: 360023847400,
              name: 'Account Opening:: Verification:: Email Address',
              raw_name:
                '{{dc.type_of_enquiry-_account_opening}}:: {{dc.type_of_enquiry-_account_opening-_address_verification}}:: {{dc.type_of_enquiry-_account_opening-_address_verification-_email_address}}',
            },
            {
              id: 360023847420,
              name: 'Account Opening:: Verification:: IDNow',
              raw_name:
                '{{dc.type_of_enquiry-_account_opening}}:: {{dc.type_of_enquiry-_account_opening-_address_verification}}:: IDNow',
            },
            {
              id: 360023437359,
              name: 'Account Opening:: Business Account',
              raw_name:
                '{{dc.type_of_enquiry-_account_opening}}:: {{dc.type_of_enquiry-_account_opening-_business_account}}',
            },
            {
              id: 360023847440,
              name: 'Account Opening:: Eligibility:: Address',
              raw_name:
                '{{dc.type_of_enquiry-_account_opening}}:: {{dc.type_of_enquiry-_account_opening-_eligibility}}:: {{dc.type_of_enquiry-_address}}',
            },
            {
              id: 360023847460,
              name: 'Account Opening:: Eligibility:: Persons',
              raw_name:
                '{{dc.type_of_enquiry-_account_opening}}:: {{dc.type_of_enquiry-_account_opening-_eligibility}}:: {{dc.type_of_enquiry-_account_opening-_eligibility-_persons}}',
            },
            {
              id: 360023437379,
              name: 'Account Opening:: Other',
              raw_name:
                '{{dc.type_of_enquiry-_account_opening}}:: {{dc.type_of_enquiry-_other}}',
            },
          ],
        });
      when(listAllDynamicContent)
        .calledWith()
        .mockResolvedValue([
          {
            placeholder: '{{dc.type_of_enquiry-_account_opening}}',
            variants: [
              {
                content: 'Account Opening',
                locale_id: 1176,
              },
            ],
          },
          {
            placeholder:
              '{{dc.type_of_enquiry-_account_opening-_address_verification}}',
            variants: [
              {
                content: 'Verification',
                locale_id: 1176,
              },
            ],
          },
          {
            placeholder:
              '{{dc.type_of_enquiry-_account_opening-_identification}}',
            variants: [
              {
                content: 'Identification',
                locale_id: 1176,
              },
            ],
          },
          {
            placeholder:
              '{{dc.type_of_enquiry-_account_opening-_business_account}}',
            variants: [
              {
                content: 'Business Account',
                locale_id: 1176,
              },
            ],
          },
          {
            placeholder: '{{dc.type_of_enquiry-_account_opening-_eligibility}}',
            variants: [
              {
                content: 'Eligibility',
                locale_id: 1176,
              },
            ],
          },
          {
            placeholder:
              '{{dc.type_of_enquiry-_account_opening-_eligibility-_persons}}',
            variants: [
              {
                content: 'Persons',
                locale_id: 1176,
              },
            ],
          },
          {
            placeholder: '{{dc.type_of_enquiry-_account_opening-_other}}',
            variants: [
              {
                content: 'Other',
                locale_id: 1176,
              },
            ],
          },
          {
            placeholder:
              '{{dc.type_of_enquiry-_account_opening-_address_verification-_person}}',
            variants: [
              {
                content: 'Person',
                locale_id: 1176,
              },
            ],
          },
          {
            placeholder:
              '{{dc.type_of_enquiry-_account_opening-_address_verification-_email_address}}',
            variants: [
              {
                content: 'Email Address',
                locale_id: 1176,
              },
            ],
          },
          {
            placeholder: '{{dc.type_of_enquiry-_address}}',
            variants: [
              {
                content: 'Address',
                locale_id: 1176,
              },
            ],
          },
          {
            placeholder: '{{dc.type_of_enquiry-_other}}',
            variants: [
              {
                content: 'Other',
                locale_id: 1176,
              },
            ],
          },
        ]);

      return expect(zendesk.getSupportCategories(Locales.en)).resolves.toEqual([
        {
          children: [
            {
              children: [
                {
                  children: [],
                  id: 'Account Opening-Verification-Address',
                  label: 'Address',
                  value: '360025875519',
                },
                {
                  children: [],
                  id: 'Account Opening-Verification-Person',
                  label: 'Person',
                  value: '360023847380',
                },
                {
                  children: [],
                  id: 'Account Opening-Verification-Email Address',
                  label: 'Email Address',
                  value: '360023847400',
                },
                {
                  children: [],
                  id: 'Account Opening-Verification-IDNow',
                  label: 'IDNow',
                  value: '360023847420',
                },
              ],
              id: 'Account Opening-Verification',
              label: 'Verification',
            },
            {
              children: [],
              id: 'Account Opening-Business Account',
              label: 'Business Account',
              value: '360023437359',
            },
            {
              children: [
                {
                  children: [],
                  id: 'Account Opening-Eligibility-Address',
                  label: 'Address',
                  value: '360023847440',
                },
                {
                  children: [],
                  id: 'Account Opening-Eligibility-Persons',
                  label: 'Persons',
                  value: '360023847460',
                },
              ],
              id: 'Account Opening-Eligibility',
              label: 'Eligibility',
            },
            {
              children: [],
              id: 'Account Opening-Other',
              label: 'Other',
              value: '360023437379',
            },
          ],
          id: 'Account Opening',
          label: 'Account Opening',
        },
      ]);
    });
  });
});
