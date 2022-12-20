import { UpvestWebhookSubscriptionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UpvestWebhookSubscriptionModel } from '../model';

export const findOneByWebhookId = (
  webhookId: string
): Promise<DocumentDefinition<UpvestWebhookSubscriptionDoc> | null> => {
  return UpvestWebhookSubscriptionModel.findOne({ webhookId })
    .lean()
    .exec();
};
