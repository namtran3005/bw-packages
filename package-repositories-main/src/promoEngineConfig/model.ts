import mongooseLeanId from 'mongoose-lean-id';
import {
  promoEngineConfigSchema,
  PromoEngineConfigDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

export { promoEngineConfigSchema } from '@bitwala-cryptobank-squad/package-schemas';

promoEngineConfigSchema.plugin(mongooseLeanId);

export const PromoEngineConfigModel = mainConnection.db.model<
  PromoEngineConfigDoc
>('PromoEngineConfig', promoEngineConfigSchema);
