import { SolarisCardDoc, SolarisCardMeta } from '@bitwala-cryptobank-squad/package-schemas';
import { Card } from '@bitwala-cryptobank-squad/package-solaris';
import { DocumentDefinition } from 'mongoose';
import { SolarisCardModel } from '../model';
import { CardLimitsInput } from './insert';

export interface SolarisCardMetaUpdater {
  'meta.canUserUnblock'?: boolean;
  meta?: SolarisCardMeta;
}

export const mergeOne = (
  solarisCardId: string,
  data: Card | SolarisCardMetaUpdater | { deletedAt?: Date } | CardLimitsInput
): Promise<DocumentDefinition<SolarisCardDoc> | null>=> {
  return SolarisCardModel.findOneAndUpdate(
    { solarisId: solarisCardId },
    { $set: data },
    { runValidators: true }
  )
    .lean()
    .exec();
};
