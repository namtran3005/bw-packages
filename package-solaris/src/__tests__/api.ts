/* eslint-disable @typescript-eslint/no-explicit-any*/

import { Solaris } from '../api';
import { SolarisApiClient } from '../client';
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
} from '../handlers';

const mockCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

describe('Solaris API wrapper class', () => {
  describe('Constructor', () => {
    let api: Solaris;
    beforeEach(() => {
      api = new Solaris(mockCreds);
      jest.clearAllMocks();
    });

    it('should instantiate an http wrapper and attach to the instance', () => {
      expect((api as any).client).toBeInstanceOf(SolarisApiClient);
    });

    it('should attach accounts handler to the instance and bind it to http wrapper', () => {
      expect(api.accounts).toBeInstanceOf(AccountsHandler);
      expect((api.accounts as any).client).toBe((api as any).client);
    });

    it('should attach businesses handler to the instance and bind it to http wrapper', () => {
      expect(api.businesses).toBeInstanceOf(BusinessesHandler);
      expect((api.businesses as any).client).toBe((api as any).client);
    });

    it('should attach bookings handler to the instance and bind it to http wrapper', () => {
      expect(api.bookings).toBeInstanceOf(BookingsHandler);
      expect((api.bookings as any).client).toBe((api as any).client);
    });

    it('should attach cards handler to the instance and bind it to http wrapper', () => {
      expect(api.cards).toBeInstanceOf(CardsHandler);
      expect((api.cards as any).client).toBe((api as any).client);
    });

    it('should attach change requests handler to the instance and bind it to http wrapper', () => {
      expect(api.changeRequests).toBeInstanceOf(ChangeRequestsHandler);
      expect((api.changeRequests as any).client).toBe((api as any).client);
    });

    it('should attach identifications handler to the instance and bind it to http wrapper', () => {
      expect(api.identifications).toBeInstanceOf(IdentificationsHandler);
      expect((api.identifications as any).client).toBe((api as any).client);
    });

    it('should attach mobile numbers handler to the instance and bind it to http wrapper', () => {
      expect(api.mobileNumbers).toBeInstanceOf(MobileNumbersHandler);
      expect((api.mobileNumbers as any).client).toBe((api as any).client);
    });

    it('should attach postbox handler to the instance and bind it to http wrapper', () => {
      expect(api.postbox).toBeInstanceOf(PostboxHandler);
      expect((api.postbox as any).client).toBe((api as any).client);
    });

    it('should attach persons handler to the instance and bind it to http wrapper', () => {
      expect(api.persons).toBeInstanceOf(PersonsHandler);
      expect((api.persons as any).client).toBe((api as any).client);
    });

    it('should attach reservations handler to the instance and bind it to http wrapper', () => {
      expect(api.reservations).toBeInstanceOf(ReservationsHandler);
      expect((api.reservations as any).client).toBe((api as any).client);
    });

    it('should attach SEPA credit transfers handler to the instance and bind it to http wrapper', () => {
      expect(api.sepaCreditTransfers).toBeInstanceOf(
        SepaCreditTransfersHandler
      );
      expect((api.sepaCreditTransfers as any).client).toBe((api as any).client);
    });

    it('should attach SEPA direct debits handler to the instance and bind it to http wrapper', () => {
      expect(api.sepaDirectDebits).toBeInstanceOf(SepaDirectDebitHandler);
      expect((api.sepaDirectDebits as any).client).toBe((api as any).client);
    });

    it('should attach standing orders handler to the instance and bind it to http wrapper', () => {
      expect(api.standingOrders).toBeInstanceOf(StandingOrdersHandler);
      expect((api.standingOrders as any).client).toBe((api as any).client);
    });

    it('should attach timed orders handler to the instance and bind it to http wrapper', () => {
      expect(api.timedOrders).toBeInstanceOf(TimedOrdersHandler);
      expect((api.timedOrders as any).client).toBe((api as any).client);
    });

    it('should attach account statements handler to the instance and bind it to http wrapper', () => {
      expect(api.accountStatements).toBeInstanceOf(AccountStatementsHandlers);
      expect((api.accountStatements as any).client).toBe((api as any).client);
    });

    it('should attach bank statements handler to the instance and bind it to http wrapper', () => {
      expect(api.bankStatements).toBeInstanceOf(BankStatementsHandlers);
      expect((api.bankStatements as any).client).toBe((api as any).client);
    });

    it('should attach tax identifications handler to the instance and bind it to http wrapper', () => {
      expect(api.taxIdentifications).toBeInstanceOf(TaxIdentificationsHandler);
      expect((api.taxIdentifications as any).client).toBe((api as any).client);
    });

    it('should attach webhooks handler to the instance and bind it to http wrapper', () => {
      expect(api.webhooks).toBeInstanceOf(WebhooksHandler);
      expect((api.webhooks as any).client).toBe((api as any).client);
    });
    it('should attach terms and conditions handler to the instance and bind it to http wrapper', () => {
      expect(api.termsAndConditions).toBeInstanceOf(TermsAndConditionsHandler);
      expect((api.termsAndConditions as any).client).toBe((api as any).client);
    });
  });
});
