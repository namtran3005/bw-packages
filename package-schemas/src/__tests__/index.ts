import * as schemas from '../index';

describe('tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it('Test all schema definitions', () => {
    expect(schemas.usersSchema).toBeDefined();
    expect(schemas.bitcoinInvoiceSchema).toBeDefined();
    expect(schemas.bitcoinInvocesConfig).toBeDefined();
    expect(schemas.emailValidator).toBeDefined();
    expect(schemas.solarisAccountSchema).toBeDefined();
    expect(schemas.solarisPersonSchema).toBeDefined();
    expect(schemas.actionLogSchema).toBeDefined();
    expect(schemas.agentSchema).toBeDefined();
    expect(schemas.roleSchema).toBeDefined();
    expect(schemas.solarisIdentificationSchema).toBeDefined();
    expect(schemas.moneyAmountSchema).toBeDefined();
    expect(schemas.sepaCreditTransferSchema).toBeDefined();
    expect(schemas.standingOrderSchema).toBeDefined();
    expect(schemas.transactionAmountSchema).toBeDefined();
    expect(schemas.solarisCardSchema).toBeDefined();
    expect(schemas.solarisCardRepresentationSchema).toBeDefined();
    expect(schemas.tradingAvailabilitySchema).toBeDefined();
    expect(schemas.sepaSavedRecipientSchema).toBeDefined();
    expect(schemas.coinfirmAmlReportSchema).toBeDefined();
    expect(schemas.solarisSeizureSchema).toBeDefined();
    expect(schemas.solarisChallengeSmsSchema).toBeDefined();
    expect(schemas.solarisChangeRequestsSchema).toBeDefined();
    expect(schemas.userDevicePairsSchema).toBeDefined();
    expect(schemas.scaChallengeSchema).toBeDefined();
    expect(schemas.backgroundJobLogsSchema).toBeDefined();
  });

  it('Test schema helpfer functions', () => {
    const notemail = 'notAnEmail';
    const notemail2 = 'notAnEmail@';
    const email = 'email@domain.com';

    expect(schemas.emailValidator(notemail)).toBeFalsy();
    expect(schemas.emailValidator(notemail2)).toBeFalsy();
    expect(schemas.emailValidator(email)).toBeTruthy();

    expect(schemas.now()).toBeInstanceOf(Date);
  });
});
