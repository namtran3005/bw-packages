import { CryptoApisWebhookSubscriptionDoc } from "@bitwala-cryptobank-squad/package-schemas";
import { DocumentDefinition } from "mongoose";
import { CryptoApisWebhookSubscriptionModel } from "../model";

export const findOneByReferenceId = (
  referenceId: string
): Promise<DocumentDefinition<CryptoApisWebhookSubscriptionDoc> | null> => {
  return CryptoApisWebhookSubscriptionModel.findOne({ referenceId })
    .lean()
    .exec();
};
