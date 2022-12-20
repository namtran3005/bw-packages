import { SolarisWebhookSubscriptionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisWebhookSubscriptionModel } from '../model';

export const findAll = (): Promise<DocumentDefinition<SolarisWebhookSubscriptionDoc>[]> => {
  return SolarisWebhookSubscriptionModel.find({})
    .lean()
    .exec();
};
