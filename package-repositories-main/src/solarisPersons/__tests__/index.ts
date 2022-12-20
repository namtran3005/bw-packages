import { insertPerson } from '../lib/insertPerson';
import { findPersonByOwner } from '../lib/findPersonByOwner';
import { findOneByFirstNameAndLastName } from '../lib/findOneByFirstNameAndLastName';
import { findOneBySolarisId } from '../lib/findOneBySolarisId';
import { mergeOnePerson } from '../lib/mergeOnePerson';
import { findManyPersonsByOwner } from '../lib/findManyPersonsByOwner';
import { getETFUserData } from '../lib/getETFUserData';

import { solarisPersonsRepo } from '../index';

describe('solaris persons repo', () => {
  it('should export insert method', () => {
    expect(solarisPersonsRepo.insert).toBe(insertPerson);
  });
  it('should export find by solarisId method', () => {
    expect(solarisPersonsRepo.findOneBySolarisId).toBe(findOneBySolarisId);
  });
  it('should export find by owner method', () => {
    expect(solarisPersonsRepo.findByOwner).toBe(findPersonByOwner);
  });
  it('should export merge one method', () => {
    expect(solarisPersonsRepo.mergeOne).toBe(mergeOnePerson);
  });
  it('should export find many persons by owner method', () => {
    expect(solarisPersonsRepo.findManyPersonsByOwner).toBe(
      findManyPersonsByOwner
    );
  });
  it('should export get etf user data method', () => {
    expect(solarisPersonsRepo.getETFUserData).toBe(getETFUserData);
  });
  it('should export find by first name and last name method', () => {
    expect(solarisPersonsRepo.findOneByFirstNameAndLastName).toBe(
      findOneByFirstNameAndLastName
    );
  });
});
