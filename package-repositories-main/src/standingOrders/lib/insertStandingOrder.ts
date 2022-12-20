import { StandingOrder } from '@bitwala-cryptobank-squad/package-solaris';
import { StandingOrderDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { StandingOrdersModel } from '../model';

export const insertStandingOrder = (
  standingOrder: StandingOrder & { owner: string }
): Promise<StandingOrderDoc> => {
  return StandingOrdersModel.create(standingOrder);
};
