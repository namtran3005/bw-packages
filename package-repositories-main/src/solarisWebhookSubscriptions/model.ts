import mongooseLeanId from 'mongoose-lean-id';
import {
  SolarisWebhookSubscriptionDoc,
  solarisWebhookSubscriptionSchema,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

solarisWebhookSubscriptionSchema.plugin(mongooseLeanId);

export const SolarisWebhookSubscriptionModel = mainConnection.db.model<
  SolarisWebhookSubscriptionDoc
>('SolarisWebhookSubscription', solarisWebhookSubscriptionSchema);
