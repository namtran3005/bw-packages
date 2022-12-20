import { insertMobileNumber } from './lib/insertMobileNumber';
import { findSolarisMobileNumberByOwner } from './lib/findSolarisMobileNumberByOwner';
import { findMobileNumbersByOwner } from './lib/findMobileNumbersByOwner';
import { mergeOneMobileNumber } from './lib/mergeOneMobileNumber';
import { upsertMobileNumber } from './lib/upsertMobileNumber';
import { deleteMobileNumberByOwner } from './lib/deleteMobileNumberByOwner';

export { SolarisMobileNumberModel } from './model';

export const solarisMobileNumberRepo = {
  insert: insertMobileNumber,
  findByOwner: findSolarisMobileNumberByOwner,
  findAllByOwner: findMobileNumbersByOwner,
  upsert: upsertMobileNumber,
  mergeOne: mergeOneMobileNumber,
  deleteByOwner: deleteMobileNumberByOwner,
};
