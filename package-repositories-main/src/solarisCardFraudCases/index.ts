import { findPendingByOwner } from './lib/findPendingByOwner';
import { findOneBySolarisId } from './lib/findOneBySolarisId';
import { upsert } from './lib/upsert';
import { mergeOne } from './lib/mergeOne';

export { SolarisCardFraudCaseModel } from './model';

export const solarisCardFraudCasesRepo = {
  findPendingByOwner,
  findOneBySolarisId,
  upsert,
  mergeOne,
};
