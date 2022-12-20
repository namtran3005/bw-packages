import { resetAllWhenMocks, when, verifyAllWhenMocksCalled } from 'jest-when';
import zendeskAPI from 'node-zendesk';

import { getZendesk } from '..';

jest.mock('node-zendesk');

describe('getSupportCategoryOption', () => {
  let zendesk: ReturnType<typeof getZendesk>;
  let showTicketFields: jest.Mock;
  const nonExistentCategoryId: number = 1;
  const existentCategoryId: number = 360023437379;

  beforeEach(() => {
    jest.resetAllMocks();
    resetAllWhenMocks();

    process.env.ZENDESK_API_URL = 'url';
    process.env.ZENDESK_API_TOKEN = 'token';
    process.env.ZENDESK_API_EMAIL = 'email';
    process.env.ZENDESK_CATEGORY_FIELD_ID = '123';
    process.env.ZENDESK_LOCALE_EN_ID = '1176';

    showTicketFields = jest.fn();
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
      });

    zendesk = getZendesk();
  });

  afterEach(verifyAllWhenMocksCalled);

  test('method return undefind with non-existent id', async () => {
    when(showTicketFields).calledWith(123).mockResolvedValue(undefined);

    return expect(
      zendesk.getSupportCategoryOption(nonExistentCategoryId)
    ).resolves.toBeUndefined();
  });

  test('method return correct category with existent id', async () => {
    when(showTicketFields)
      .calledWith(123)
      .mockResolvedValue({
        custom_field_options: [
          {
            id: 360023437379,
            name: 'Account Opening:: Other',
            raw_name:
              '{{dc.type_of_enquiry-_account_opening}}:: {{dc.type_of_enquiry-_other}}',
          },
        ],
      });

    return expect(
      zendesk.getSupportCategoryOption(existentCategoryId)
    ).resolves.toEqual({
      id: 360023437379,
      name: 'Other',
      raw_name:
        '{{dc.type_of_enquiry-_account_opening}}:: {{dc.type_of_enquiry-_other}}',
    });
  });
});
