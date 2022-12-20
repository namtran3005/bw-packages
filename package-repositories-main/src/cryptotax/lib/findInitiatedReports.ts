import {
  CryptoTaxDoc,
  CryptoTaxRequestStatuses
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { CryptoTaxModel } from '../model';

export const findInitiatedReports = async (): Promise<DocumentDefinition<CryptoTaxDoc>[]> =>
  CryptoTaxModel.find({
    status: CryptoTaxRequestStatuses.INITIATED,
    deletedAt: { $exists: false },
  })

    .lean()
    .exec();
