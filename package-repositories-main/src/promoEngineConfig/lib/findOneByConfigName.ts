import { PromoEngineConfigInput } from '@bitwala-cryptobank-squad/package-schemas';
import { PromoEngineConfigModel } from '../model';

export const findOneByConfigName = (
  staticConfigName: string
): Promise<PromoEngineConfigInput | null> => {
  return PromoEngineConfigModel.findOne({ staticConfigName })
    .lean()
    .exec();
};
