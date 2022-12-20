import {
  OrderDoc,
  OrderStatus,
} from '@bitwala-cryptobank-squad/package-schemas';

import { createFindProjection } from '../../utils';
import { OrderModel } from '../model';

export const defaultProjectedFields = [
  'id',
  'owner',
  'input',
  'output',
  'orderId',
  'referenceId',
  'status',
] as const;
type DefaultFields = typeof defaultProjectedFields[number];

export const defaultOrderStatuses = [
  OrderStatus.SETTLED,
  OrderStatus.CLEARED,
  OrderStatus.PAID,
  OrderStatus.PAYMENT_CONFIRMED,
  OrderStatus.PAYMENT_DETECTED,
  OrderStatus.PAYMENT_INVALID,
];

export interface FindByUserIdsQueryOptions<T extends keyof OrderDoc> {
  includedOrderStatuses?: ReadonlyArray<OrderStatus>;
  projectionFields?: T[];
}

/**
 * Fetches the ørders owned by certain userIds
 *
 * @param userIds
 * @param quotedAtCutoffDate If provided, the orders will have a quotedAt greater than or equal to this date
 * @param options additional arguments, if needed
 */
export const findByUserIds = async <T extends keyof OrderDoc = DefaultFields>(
  userIds: string[],
  quotedAtCutoffDate: Date,
  options: FindByUserIdsQueryOptions<T> = {},
): Promise<Pick<OrderDoc, T>[]> => {
  const outProjection = createFindProjection(
    (options.projectionFields as string[]) ?? defaultProjectedFields,
  );

  const ordersQuery: Record<string, unknown> = {
    owner: {
      $in: userIds,
    },
    quotedAt: {
      $gte: quotedAtCutoffDate,
    },
    status: {
      $in: options.includedOrderStatuses ?? defaultOrderStatuses,
    },
  };

  return OrderModel.find(ordersQuery, outProjection)
    .lean<Pick<OrderDoc, T>>()
    .exec();
};
