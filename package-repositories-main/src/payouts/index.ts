import { insertMany } from './lib/insertMany';
import { findByOwnerAndIsNotAdvocateAndPaid } from './lib/findByOwnerAndIsNotAdvocateAndPaid';

export { PayoutsModel } from './model';

export const payoutsRepo = {
  insertMany,
  findByOwnerAndIsNotAdvocateAndPaid,
};
