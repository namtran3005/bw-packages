import { findLastLegitimation } from './lib/findLastLegitimation';
import { insertLegitimation } from './lib/insertLegitimation';

export { SolarisLegitimationsModel } from './model';

export const solarisLegitimationsRepo = {
  insert: insertLegitimation,
  findLast: findLastLegitimation,
};
