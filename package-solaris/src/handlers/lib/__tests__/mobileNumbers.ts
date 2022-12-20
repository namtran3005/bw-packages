/* eslint-disable @typescript-eslint/no-explicit-any*/

import { MobileNumbersHandler } from '../mobileNumbers';
import { Handler } from '../../handler';

import { personInputShape } from '../../../validations/schemas/persons';
import { solarisClientFactory, ClientCreds } from '../../..';

const mockCreds: ClientCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

describe('Mobile numbers handlers', () => {
  const client = solarisClientFactory(mockCreds);

  beforeAll(() => {
    jest.spyOn(client, 'get');
    jest.spyOn(client, 'post');
    jest.spyOn(client, 'patch');
    jest.spyOn(client, 'put');
    jest.spyOn(client, 'delete');
    jest
      .spyOn(personInputShape.mobileNumber, 'validateSync')
      .mockImplementation(jest.fn());
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  const mobileNumbers = new MobileNumbersHandler(client);

  const personId = 'personId';

  it('should be an instance of Handler class', () => {
    expect(mobileNumbers).toBeInstanceOf(Handler);
  });

  describe('MobileNumbersHandler.prototype.setNumber', () => {
    it('should validate the input with a schema', () => {
      const mobileNumber = '1234567';
      mobileNumbers.setNumber(personId, mobileNumber);
      expect(personInputShape.mobileNumber.validateSync).toBeCalledWith(
        mobileNumber
      );
    });

    it('should POST to /persons/:personId/mobile_number', () => {
      mobileNumbers.setNumber(personId, '1234567');
      expect(client.post).toBeCalledWith({
        url: '/persons/personId/mobile_number',
        data: { number: '1234567' },
      });
    });
  });

  describe('MobileNumbersHandler.prototype.requestAuthorization', () => {
    it('should POST to /persons/:personId/mobile_number/authorize', () => {
      mobileNumbers.requestAuthorization(personId, '1234567');
      expect(client.post).toBeCalledWith({
        url: '/persons/personId/mobile_number/authorize',
        data: { number: '1234567' },
      });
    });
  });

  describe('MobileNumbersHandler.prototype.completeAuthorization', () => {
    it('should POST to /persons/:personId/mobile_number/confirm', () => {
      mobileNumbers.completeAuthorization(personId, '+123456', 'token');
      expect(client.post).toBeCalledWith({
        url: '/persons/personId/mobile_number/confirm',
        data: { number: '+123456', token: 'token' },
      });
    });
  });
});
