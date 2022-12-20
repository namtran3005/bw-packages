import {
  AccountsHandler,
  BookingsHandler,
  CardsHandler,
  ChangeRequestsHandler,
  IdentificationsHandler,
  MobileNumbersHandler,
  PostboxHandler,
  PersonsHandler,
  ReservationsHandler,
  SepaCreditTransfersHandler,
  SepaDirectDebitHandler,
  StandingOrdersHandler,
  AccountStatementsHandlers,
  BankStatementsHandlers,
  TaxIdentificationsHandler,
  TermsAndConditionsHandler,
  TimedOrdersHandler,
  WebhooksHandler,
  PersonSettingsHandler,
} from '../index';

describe('Handlers index', () => {
  it('should re-export handlers', () => {
    expect(AccountsHandler).toBeInstanceOf(Function);
    expect(BookingsHandler).toBeInstanceOf(Function);
    expect(CardsHandler).toBeInstanceOf(Function);
    expect(ChangeRequestsHandler).toBeInstanceOf(Function);
    expect(IdentificationsHandler).toBeInstanceOf(Function);
    expect(MobileNumbersHandler).toBeInstanceOf(Function);
    expect(PostboxHandler).toBeInstanceOf(Function);
    expect(PersonsHandler).toBeInstanceOf(Function);
    expect(ReservationsHandler).toBeInstanceOf(Function);
    expect(SepaCreditTransfersHandler).toBeInstanceOf(Function);
    expect(SepaDirectDebitHandler).toBeInstanceOf(Function);
    expect(StandingOrdersHandler).toBeInstanceOf(Function);
    expect(AccountStatementsHandlers).toBeInstanceOf(Function);
    expect(BankStatementsHandlers).toBeInstanceOf(Function);
    expect(TaxIdentificationsHandler).toBeInstanceOf(Function);
    expect(TermsAndConditionsHandler).toBeInstanceOf(Function);
    expect(TimedOrdersHandler).toBeInstanceOf(Function);
    expect(WebhooksHandler).toBeInstanceOf(Function);
    expect(PersonSettingsHandler).toBeInstanceOf(Function);
  });
});
