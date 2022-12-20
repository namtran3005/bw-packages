import { OrderDoc, OrderStatus, Currency } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { OrderModel } from '../model';

export interface Filter {
  sell?: Currency;
  buy?: Currency;
  statuses?: OrderStatus[];
}

export const findByOwner = (
  owner: string,
  { statuses, sell, buy }: Filter
): Promise<DocumentDefinition<OrderDoc>[]> => {
  let selector = {};

  if (statuses) {
    selector = {
      status: {
        $in: statuses,
      },
    };
  }

  if (buy) {
    selector = { ...selector, 'output.currency': buy };
  }
  if (sell) {
    selector = { ...selector, 'input.currency': sell };
  }

  return OrderModel.find({ owner, ...selector })
    .lean()
    .exec();
};
