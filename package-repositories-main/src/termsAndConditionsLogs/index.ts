import { findAll } from './lib/findAll';
import { findOneById } from './lib/findOneById';
import { insert } from './lib/insert';
import { update } from './lib/update';
export { TermsAndConditionsLogsModel } from './model';

export const termsAndConditionsLogsRepo = {
  findAll,
  findOneById,
  insert,
  update,
};
