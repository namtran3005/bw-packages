import {
  PortfolioSnapshot,
  PortfolioSnapshotDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { PortfolioSnapshotDailyModel } from '../model';

export const insertDailySnapshot = (
  portfolioSnapshot: PortfolioSnapshot
): Promise<PortfolioSnapshotDoc> => {
  return PortfolioSnapshotDailyModel.create(portfolioSnapshot);
};
