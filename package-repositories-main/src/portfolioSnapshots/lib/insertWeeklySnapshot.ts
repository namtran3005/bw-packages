import {
  PortfolioSnapshot,
  PortfolioSnapshotDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { PortfolioSnapshotWeeklyModel } from '../model';

export const insertWeeklySnapshot = (
  portfolioSnapshot: PortfolioSnapshot
): Promise<PortfolioSnapshotDoc> => {
  return PortfolioSnapshotWeeklyModel.create(portfolioSnapshot);
};
