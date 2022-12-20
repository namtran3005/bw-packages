import {
  PortfolioSnapshot,
  PortfolioSnapshotDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { PortfolioSnapshotHourlyModel } from '../model';

export const insertHourlySnapshot = (
  portfolioSnapshot: PortfolioSnapshot
): Promise<PortfolioSnapshotDoc> => {
  return PortfolioSnapshotHourlyModel.create(portfolioSnapshot);
};
