import {
  BusinessesHandler,
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
  CryptoHandler,
  ChallengeSmsHandler,
  CardFraudCasesHandler,
  PersonSettingsHandler,
  DeviceBindingHandler,
  DeviceChallengeHandler,
} from './handlers';
import { solarisClientFactory, ISolaris, ClientCreds } from '.';

export class Solaris {
  public accounts: AccountsHandler;
  public businesses: BusinessesHandler;
  public bookings: BookingsHandler;
  public cards: CardsHandler;
  public changeRequests: ChangeRequestsHandler;
  public identifications: IdentificationsHandler;
  public mobileNumbers: MobileNumbersHandler;
  public postbox: PostboxHandler;
  public persons: PersonsHandler;
  public reservations: ReservationsHandler;
  public sepaCreditTransfers: SepaCreditTransfersHandler;
  public sepaDirectDebits: SepaDirectDebitHandler;
  public standingOrders: StandingOrdersHandler;
  public accountStatements: AccountStatementsHandlers;
  public bankStatements: BankStatementsHandlers;
  public taxIdentifications: TaxIdentificationsHandler;
  public termsAndConditions: TermsAndConditionsHandler;
  public timedOrders: TimedOrdersHandler;
  public webhooks: WebhooksHandler;
  public crypto: CryptoHandler;
  public challengeSms: ChallengeSmsHandler;
  public cardFraudCases: CardFraudCasesHandler;
  public personSettings: PersonSettingsHandler;
  public deviceBinding: DeviceBindingHandler;
  public deviceChallenge: DeviceChallengeHandler;

  private client: ISolaris;

  constructor(creds: ClientCreds) {
    this.client = solarisClientFactory(creds);

    this.accounts = new AccountsHandler(this.client);
    this.businesses = new BusinessesHandler(this.client);
    this.bookings = new BookingsHandler(this.client);
    this.cards = new CardsHandler(this.client);
    this.changeRequests = new ChangeRequestsHandler(this.client);
    this.identifications = new IdentificationsHandler(this.client);
    this.mobileNumbers = new MobileNumbersHandler(this.client);
    this.postbox = new PostboxHandler(this.client);
    this.persons = new PersonsHandler(this.client);
    this.reservations = new ReservationsHandler(this.client);
    this.sepaCreditTransfers = new SepaCreditTransfersHandler(this.client);
    this.sepaDirectDebits = new SepaDirectDebitHandler(this.client);
    this.standingOrders = new StandingOrdersHandler(this.client);
    this.accountStatements = new AccountStatementsHandlers(this.client);
    this.bankStatements = new BankStatementsHandlers(this.client);
    this.taxIdentifications = new TaxIdentificationsHandler(this.client);
    this.termsAndConditions = new TermsAndConditionsHandler(this.client);
    this.timedOrders = new TimedOrdersHandler(this.client);
    this.webhooks = new WebhooksHandler(this.client);
    this.crypto = new CryptoHandler(this.client);
    this.challengeSms = new ChallengeSmsHandler(this.client);
    this.cardFraudCases = new CardFraudCasesHandler(this.client);
    this.personSettings = new PersonSettingsHandler(this.client);
    this.deviceBinding = new DeviceBindingHandler(this.client);
    this.deviceChallenge = new DeviceChallengeHandler(this.client);
  }
}
