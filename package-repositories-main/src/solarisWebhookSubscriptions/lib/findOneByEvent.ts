import { SolarisWebhookSubscriptionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
// import { EventType } from '@bitwala-cryptobank-squad/package-solaris';
import { SolarisWebhookSubscriptionModel } from '../model';

export const findOneByEvent = (
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  eventType: any // EventType // because of the error: `Cannot find name 'EventType'.`, dunno why
): Promise<DocumentDefinition<SolarisWebhookSubscriptionDoc> | null> => {
  return SolarisWebhookSubscriptionModel.findOne({ eventType })
    .lean()
    .exec();
};
