/* eslint-disable @typescript-eslint/no-explicit-any*/

import { PersonsHandler, cleanPerson } from '../persons';
import { Handler } from '../../handler';
import {
  Salutation,
  Countries,
  EmploymentStatus,
  PersonInput,
  Person,
  ClientCreds,
  solarisClientFactory,
} from '../../..';

const mockCreds: ClientCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

const input: PersonInput = {
  salutation: Salutation.MR,
  firstName: 'John',
  lastName: 'Doe',
  address: {
    line1: 'Some str. 1',
    postalCode: '12345',
    city: 'Arkham',
    country: Countries.US,
  },
  employmentStatus: EmploymentStatus.EMPLOYED,
  mobileNumber: '1234567',
  birthDate: '1900-01-01',
  birthCountry: Countries.US,
  birthCity: 'Arkham',
  nationality: Countries.US,
};

describe('Persons handlers', () => {
  const client = solarisClientFactory(mockCreds);
  const persons = new PersonsHandler(client);

  beforeAll(() => {
    jest.spyOn(client, 'get');
    jest.spyOn(client, 'post');
    jest.spyOn(client, 'patch');
    jest.spyOn(client, 'put');
    jest.spyOn(client, 'delete');
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
  const personId = 'personId';

  it('should be an instance of Handler class', () => {
    expect(persons).toBeInstanceOf(Handler);
  });

  describe('PersonsHandler.prototype.create', () => {
    it('should POST to /persons', () => {
      persons.create(input);

      expect(client.post).toBeCalledWith({
        url: '/persons',
        data: input,
      });
    });
  });

  describe('PersonsHandler.prototype.getOne', () => {
    it('should GET from /persons/:personId', () => {
      persons.getOne(personId);

      expect(client.get).toBeCalledWith({
        url: '/persons/personId',
      });
    });
  });

  describe('PersonsHandler.prototype.list', () => {
    it('should GET from /persons using listing params', () => {
      const params = {
        page: { size: 10, number: 2 },
        filter: { firstName: 'foo' },
      };
      persons.list(params);

      expect(client.get).toBeCalledWith({
        url: '/persons',
        params,
      });
    });
  });

  describe('PersonsHandler.prototype.update', () => {
    it('should PATCH to /persons/:personId', () => {
      const patch = {
        email: 'foo@bar.baz',
      };

      persons.update(personId, patch);

      expect(client.patch).toBeCalledWith({
        url: '/persons/personId',
        data: patch,
      });
    });
  });

  describe('cleanPerson', () => {
    it('should return trimmed version of email', () => {
      const person: Person = {
        ...input,
        solarisId: 'solarisId',
        email: '  test@bitwala.com   ',
      };

      expect(cleanPerson(person)).toEqual({
        ...person,
        email: 'test@bitwala.com',
      });
    });
  });

  describe('PersonsHandler.prototype.getAllPostboxItems', () => {
    it('should GET from /persons/:personId/postbox/items', () => {
      persons.getAllPostboxItems(personId);

      expect(client.get).toBeCalledWith({
        url: '/persons/personId/postbox/items',
      });
    });
  });
});
