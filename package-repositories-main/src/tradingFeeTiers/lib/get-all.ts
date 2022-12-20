import { TradingFeeTierDoc } from '@bitwala-cryptobank-squad/package-schemas';

import { createFindProjection } from '../../utils';
import { TradingFeeTierModel } from '../model';

export const defaultProjectedFields = [
  'tierId',
  'savingsPlanTcFeeOption',
  'standardTcFeeOption',
  'volumeLowerBound',
  'volumeUpperBound',
] as const;

type DefaultFields = typeof defaultProjectedFields[number];

export const getAll = async <T extends keyof TradingFeeTierDoc = DefaultFields>(
  projectedFields?: T[]
): Promise<Pick<TradingFeeTierDoc, T>[]> => {

  const outProjection = createFindProjection(
    (projectedFields as string[]) ?? defaultProjectedFields
  );

  return TradingFeeTierModel
    .find()
    .select(outProjection)
    .lean<Pick<TradingFeeTierDoc, T>>()
    .exec();
};
