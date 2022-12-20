/* eslint-disable @typescript-eslint/no-explicit-any*/

import { CardsHandler } from '../cards';
import { Handler } from '../../handler';
import { CardType, ClientCreds, solarisClientFactory } from '../../..';

import { cardInputSchema } from '../../../validations/schemas/cards';

const mockCreds: ClientCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

const data = {
  type: CardType.MASTERCARD_DEBIT,
  pin: '1111',
  line1: 'line 1',
  reference: '12345678123456781234567812345678',
};

describe('Cards handlers', () => {
  const client = solarisClientFactory(mockCreds);

  beforeAll(() => {
    jest.spyOn(client, 'get');
    jest.spyOn(client, 'post');
    jest.spyOn(client, 'patch');
    jest.spyOn(client, 'put');
    jest.spyOn(client, 'delete');
    jest.spyOn(cardInputSchema, 'validateSync').mockImplementation(jest.fn());
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  const cards = new CardsHandler(client);

  const accountId = 'accountId';
  const personId = 'personId';
  const cardId = 'cardId';
  const businessId = 'businessId';

  it('should be an instance of Handler class', () => {
    expect(cards).toBeInstanceOf(Handler);
  });

  describe('CardsHandler.prototype.create', () => {
    it('should validate the input with a schema', () => {
      cards.create(personId, accountId, data);
      expect(cardInputSchema.validateSync).toBeCalledWith(data);
    });

    it('should POST to /persons/:personId/accounts/:accountId/cards', () => {
      cards.create(personId, accountId, data);
      expect(client.post).toBeCalledWith({
        url: '/persons/personId/accounts/accountId/cards',
        data,
      });
    });
  });

  describe('CardsHandler.prototype.activate', () => {
    it('should POST to /cards/:cardId/activate', () => {
      cards.activate(cardId, 'token');
      expect(client.post).toBeCalledWith({
        url: '/cards/cardId/activate',
        data: { verificationToken: 'token' },
      });
    });
  });

  describe('CardsHandler.prototype.getOne', () => {
    it('should GET from /cards/:cardId', () => {
      cards.getOne(cardId);
      expect(client.get).toBeCalledWith({ url: '/cards/cardId' });
    });
  });

  describe('CardsHandler.prototype.listByAccount', () => {
    it('should GET from /accounts/:accountId/cards using optional params', () => {
      const params = {
        page: { size: 10, number: 2 },
      };
      cards.listByAccount(accountId, params);
      expect(client.get).toBeCalledWith({
        url: '/accounts/accountId/cards',
        params,
      });
    });
  });

  describe('CardsHandler.prototype.listByBusiness', () => {
    it('should GET from /businesses/:businessId/cards using optional params', () => {
      const params = {
        page: { size: 10, number: 2 },
      };
      cards.listByBusiness(businessId, params);
      expect(client.get).toBeCalledWith({
        url: '/businesses/businessId/cards',
        params,
      });
    });
  });

  describe('CardsHandler.prototype.block', () => {
    it('should POST to /cards/:cardId/block without a body', () => {
      cards.block(cardId);
      expect(client.post).toBeCalledWith({ url: '/cards/cardId/block' });
    });
  });

  describe('CardsHandler.prototype.unblock', () => {
    it('should POST to /cards/:cardId/unblock without a body', () => {
      cards.unblock(cardId);
      expect(client.post).toBeCalledWith({ url: '/cards/cardId/unblock' });
    });
  });

  describe('CardsHandler.prototype.changePin', () => {
    it('should POST to /cards/:cardId/change_pin with new PIN', () => {
      cards.changePin(cardId, '2222');
      expect(client.post).toBeCalledWith({
        url: '/cards/cardId/change_pin',
        data: { pin: '2222' },
      });
    });
  });

  describe('CardsHandler.prototype.close', () => {
    it('should POST to /cards/:cardId/close without a body', () => {
      cards.close(cardId);
      expect(client.post).toBeCalledWith({ url: '/cards/cardId/close' });
    });
  });
});
