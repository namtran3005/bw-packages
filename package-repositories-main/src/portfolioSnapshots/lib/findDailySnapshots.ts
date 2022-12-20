import { PortfolioSnapshotDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { differenceInDays } from 'date-fns';
import { DocumentDefinition } from 'mongoose';
import { PortfolioSnapshotDailyModel } from '../model';

const MAX_NUM_DAYS = 200;

export const findDailySnapshots = (
  owner: string,
  from: Date,
  to: Date
): Promise<DocumentDefinition<PortfolioSnapshotDoc>[]> => {
  if (MAX_NUM_DAYS < differenceInDays(to, from)) {
    throw new Error('Range exceeds maximum number of days.');
  }
  return PortfolioSnapshotDailyModel.find({
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
