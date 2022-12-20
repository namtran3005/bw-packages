import { insertPerson } from './lib/insertPerson';
import { findOneBySolarisId } from './lib/findOneBySolarisId';
import { findPersonByOwner } from './lib/findPersonByOwner';
import { mergeOnePerson } from './lib/mergeOnePerson';
import { findManyPersonsByOwner } from './lib/findManyPersonsByOwner';
import { getETFUserData } from './lib/getETFUserData';
import { findOneByFirstNameAndLastName } from './lib/findOneByFirstNameAndLastName';

export { SolarisPersonModel } from './model';

export const solarisPersonsRepo = {
  insert: insertPerson,
  findOneBySolarisId,
  findByOwner: findPersonByOwner,
  mergeOne: mergeOnePerson,
  findManyPersonsByOwner,
  getETFUserData,
  findOneByFirstNameAndLastName,
};
