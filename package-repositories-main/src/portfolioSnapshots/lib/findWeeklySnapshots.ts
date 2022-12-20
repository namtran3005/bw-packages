import { PortfolioSnapshotDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { PortfolioSnapshotWeeklyModel } from '../model';

export const findWeeklySnapshots = (
  owner: string,
  from: Date,
  to: Date
): Promise<DocumentDefinition<PortfolioSnapshotDoc>[]> => {
  return PortfolioSnapshotWeeklyModel.find({
    owner,
    snapshotAt: {
      $gte: from,
      $lte: to,
    },
  })
    .sort({ snapshotAt: 1 })
    .lean()
    .exec();
};
