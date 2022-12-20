import { PayoutInput, PayoutDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { PayoutsModel } from '../model';

export const insertMany = (data: PayoutInput[]): Promise<PayoutDoc[]> => {
  return PayoutsModel.insertMany(data);
};
