import { IneligibleUserDoc, IneligibleUser } from '@bitwala-cryptobank-squad/package-schemas';
import { IneligibleUserModel } from '../model';

export const insertIneligibleUser = (
  ineligibleUser: IneligibleUser
): Promise<IneligibleUserDoc> => {
  return IneligibleUserModel.create(ineligibleUser);
};
