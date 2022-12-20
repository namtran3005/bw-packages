import { Schema, Document } from 'mongoose';

import { MoneyUnit, Currencies, MoneyAmount } from '@bitwala-cryptobank-squad/package-solaris';

export interface MoneyAmountSubdoc extends Document, MoneyAmount {}

const relaxedMoneyAmountShape = {
  currency: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    enum: Object.values(MoneyUnit),
    default: MoneyUnit.CENTS,
    required: false,
  },
};

const moneyAmountShape = {
  ...relaxedMoneyAmountShape,
  currency: {
    type: String,
    enum: Object.values(Currencies),
    required: true,
  },
  unit: {
    type: String,
    enum: Object.values(MoneyUnit),
    required: true,
  },
};

export const relaxedMoneyAmountSchema: Schema = new Schema(
  relaxedMoneyAmountShape,
  { _id: false }
);

export const moneyAmountSchema: Schema = new Schema(moneyAmountShape, {
  _id: false,
});
