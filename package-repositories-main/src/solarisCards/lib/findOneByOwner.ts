import { SolarisCardDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisCardModel } from '../model';

export const findOneByOwner = (
  owner: string
): Promise<DocumentDefinition<SolarisCardDoc> | null>=> {
  return SolarisCardModel.findOne({ owner, deletedAt: { $exists: false } })
    .sort({ createdAt: -1 })
    .lean()
    .exec();
};
