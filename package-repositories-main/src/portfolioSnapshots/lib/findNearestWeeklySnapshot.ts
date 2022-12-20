import { PortfolioSnapshotDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { PortfolioSnapshotWeeklyModel } from '../model';
import { findNearestSnapshot } from './findNearestSnapshot';

export const findNearestWeeklySnapshot = (
  owner: string,
  when: Date
): Promise<DocumentDefinition<PortfolioSnapshotDoc> | null> => {
  return findNearestSnapshot(owner, when, PortfolioSnapshotWeeklyModel);
};
