import { getIneligibleUserByEmail } from '../lib/getIneligibleUserByEmail';
import { insertIneligibleUser } from '../lib/insertIneligibleUser';
import { getIneligibleUserByToken } from '../lib/getIneligibleUserByToken';
import { pushVerificationToken } from '../lib/pushVerificationToken';

import { ineligibleUsersRepo } from '../index';

describe('Ineligible users repo', () => {
  it('should export get by email method', () => {
    expect(ineligibleUsersRepo.getIneligibleUserByEmail).toBe(
      getIneligibleUserByEmail
    );
  });
  it('should export insert method', () => {
    expect(ineligibleUsersRepo.insert).toBe(insertIneligibleUser);
  });
  it('should export insert method - 1', () => {
    expect(ineligibleUsersRepo.getIneligibleUserByToken).toBe(
      getIneligibleUserByToken
    );
  });
  it('should export insert method - 2', () => {
    expect(ineligibleUsersRepo.pushVerificationToken).toBe(
      pushVerificationToken
    );
  });
});
