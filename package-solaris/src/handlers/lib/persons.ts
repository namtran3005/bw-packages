import {
  ListingParams,
  Person,
  PersonInput,
  PersonsFilter,
  PersonPatch,
  ChangeRequest,
  PostboxItem,
} from '../../types';

import { Handler } from '../handler';

export const cleanPerson = (payload: Person): Person => ({
  ...payload,
  email: payload.email && payload.email.trim(),
});

export class PersonsHandler extends Handler {
  public async list(params?: ListingParams<PersonsFilter>): Promise<Person[]> {
    const persons: Person[] = await this.client.get({
      url: '/persons',
      params,
    });
    return persons.map(cleanPerson);
  }

  public async create(payload: PersonInput): Promise<Person> {
    const person: Person = await this.client.post({
      url: '/persons',
      data: payload,
    });
    return cleanPerson(person);
  }

  public async getOne(personId: string): Promise<Person> {
    const person: Person = await this.client.get({
      url: `/persons/${personId}`,
    });
    return cleanPerson(person);
  }

  public async update(
    personId: string,
    data: PersonPatch
  ): Promise<ChangeRequest> {
    return this.client.patch({
      url: `/persons/${personId}`,
      data,
    });
  }

  public async getAllPostboxItems(personId: string): Promise<PostboxItem[]> {
    return this.client.get({
      url: `/persons/${personId}/postbox/items`,
    });
  }
}
