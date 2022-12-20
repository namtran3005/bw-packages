import { update } from './lib/update';
import { findOneByConfigName } from './lib/findOneByConfigName';

export { PromoEngineConfigModel } from './model';

export const promoEngineConfigRepo = {
  update,
  findOneByConfigName,
};
