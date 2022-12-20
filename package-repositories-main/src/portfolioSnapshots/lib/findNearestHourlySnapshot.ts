import { PortfolioSnapshotDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { PortfolioSnapshotHourlyModel } from '../model';
import { findNearestSnapshot } from './findNearestSnapshot';

export const findNearestHourlySnapshot = (
  owner: string,
  when: Date
): Promise<DocumentDefinition<PortfolioSnapshotDoc> | null> => {
  return findNearestSnapshot(owner, when, PortfolioSnapshotHourlyModel);
};
