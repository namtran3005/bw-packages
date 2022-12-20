import mongooseLeanId from 'mongoose-lean-id';
import { cryptoTaxSchema, CryptoTaxDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

cryptoTaxSchema.plugin(mongooseLeanId);

export const CryptoTaxModel = mainConnection.db.model<CryptoTaxDoc>(
  'CryptoTax',
  cryptoTaxSchema
);
