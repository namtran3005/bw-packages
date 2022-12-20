import { insertTaxIdentification } from './lib/insertTaxIdentification';
import { findTaxIdentificationsByOwner } from './lib/findTaxIdentificationsByOwner';
import { upsertTaxIdentification } from './lib/upsertTaxIdentification';

export { SolarisTaxIdentificationModel } from './model';

export const solarisTaxIdentificationsRepo = {
  insert: insertTaxIdentification,
  findByOwner: findTaxIdentificationsByOwner,
  upsert: upsertTaxIdentification,
};
