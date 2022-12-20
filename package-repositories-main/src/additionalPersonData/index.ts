import { findOneByUserID } from './lib/findOneByUserID';
import { upsertAdditionalPersonData } from './lib/upsertAdditionalPersonData';

export { AdditionalPersonDataModel } from './model';

export const additionalPersonDataRepo = {
  findOneByUserID: findOneByUserID,
  upsert: upsertAdditionalPersonData,
};
