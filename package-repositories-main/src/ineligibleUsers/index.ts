import { getIneligibleUserByEmail } from './lib/getIneligibleUserByEmail';
import { insertIneligibleUser } from './lib/insertIneligibleUser';
import { getIneligibleUserByToken } from './lib/getIneligibleUserByToken';
import { pushVerificationToken } from './lib/pushVerificationToken';
import { setEmailVerified } from './lib/setEmailVerified';

export { IneligibleUserModel } from './model';

export const ineligibleUsersRepo = {
  insert: insertIneligibleUser,
  getIneligibleUserByEmail,
  getIneligibleUserByToken,
  pushVerificationToken,
  setEmailVerified,
};
