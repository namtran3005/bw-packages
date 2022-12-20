import { findOneBySolarisId } from './lib/findOneBySolarisId';
import { findOneByOwner } from './lib/findOneByOwner';
import { insert } from './lib/insert';
import { mergeOne } from './lib/mergeOne';

export { SolarisCardModel } from './model';

export const solarisCardsRepo = {
  findOneBySolarisId,
  findOneByOwner,
  insert,
  mergeOne,
};
