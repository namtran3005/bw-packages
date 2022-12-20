import { CryptoTaxModel } from '../model';

export const countByOwner = async (owner: string): Promise<number> =>
  CryptoTaxModel.countDocuments({ owner, deletedAt: { $exists: false } });
