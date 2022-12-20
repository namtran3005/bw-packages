import { SolarisWebhookLogDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisWebhookLogModel } from '../model';

export const findOneById = (
  id: string
): Promise<DocumentDefinition<SolarisWebhookLogDoc> | null> => {
  return SolarisWebhookLogModel.findOne({ _id: id })
    .lean()
    .exec();
};
