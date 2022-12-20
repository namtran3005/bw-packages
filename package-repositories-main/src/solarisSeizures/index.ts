import { upsertSeizure } from './lib/upsertSeizure';
import { deleteSeizureBySolarisId } from './lib/deleteSeizureBySolarisId';
import { getSeizuresByOwner } from './lib/getSeizuresByOwner';

export { SolarisSeizureModel } from './model';

export const solarisSeizuresRepo = {
  upsert: upsertSeizure,
  deleteBySolarisId: deleteSeizureBySolarisId,
  getSeizuresByOwner : getSeizuresByOwner
};