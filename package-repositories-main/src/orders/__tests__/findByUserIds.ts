import { OrderDoc } from '@bitwala-cryptobank-squad/package-schemas';

import { createFindProjection } from '../../utils';
import { ordersRepo } from '../index';
import {
  defaultOrderStatuses,
  defaultProjectedFields,
} from '../lib/findByUserIds';
import { OrderModel } from '../model';

describe('find order by user ids', () => {
  const mockOrder = { id: 1 };

  beforeAll(() => {
    jest
      .spyOn(OrderModel, 'find')
      .mockImplementation(
        () => ({ lean: () => ({ exec: () => [mockOrder] }) } as never),
      );
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should call find with default projection', async () => {
    const userIds = ['1', '2'];
    const quotedAtCutoffDate = new Date();

    const response = await ordersRepo.findByUserIds(
      userIds,
      quotedAtCutoffDate,
    );

    expect(OrderModel.find).toHaveBeenCalledWith(
      {
        owner: {
          $in: userIds,
        },
        quotedAt: {
          $gte: quotedAtCutoffDate,
        },
        status: {
          $in: defaultOrderStatuses,
        },
      },
      createFindProjection([...defaultProjectedFields]),
    );

    expect(response).toStrictEqual([mockOrder]);
  });

  it('should call find with projected fields', async () => {
    const projectedFields: (keyof OrderDoc)[] = ['owner', 'status'];

    const userIds = ['1', '2'];
    const quotedAtCutoffDate = new Date();

    const response = await ordersRepo.findByUserIds(
      userIds,
      quotedAtCutoffDate,
      { projectionFields: ['owner', 'status'] },
    );

    expect(OrderModel.find).toHaveBeenCalledWith(
      {
        owner: {
          $in: userIds,
        },
        quotedAt: {
          $gte: quotedAtCutoffDate,
        },
        status: {
          $in: defaultOrderStatuses,
        },
      },
      createFindProjection([...projectedFields]),
    );

    expect(response).toStrictEqual([mockOrder]);
  });
});
