import { PortfolioSnapshotDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { PortfolioSnapshotDailyModel } from '../model';
import { findNearestSnapshot } from './findNearestSnapshot';

export const findNearestDailySnapshot = (
  owner: string,
  when: Date
): Promise<DocumentDefinition<PortfolioSnapshotDoc> | null> => {
  return findNearestSnapshot(owner, when, PortfolioSnapshotDailyModel);
};
