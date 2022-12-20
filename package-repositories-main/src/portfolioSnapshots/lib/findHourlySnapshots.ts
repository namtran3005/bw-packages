import { PortfolioSnapshotDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { differenceInHours } from 'date-fns';
import { DocumentDefinition } from 'mongoose';
import { PortfolioSnapshotHourlyModel } from '../model';

const MAX_NUM_HOURS = 200;

export const findHourlySnapshots = (
  owner: string,
  from: Date,
  to: Date
): Promise<DocumentDefinition<PortfolioSnapshotDoc>[]> => {
  if (MAX_NUM_HOURS < differenceInHours(to, from)) {
    throw new Error('Range exceeds maximum number of hours.');
  }
  return PortfolioSnapshotHourlyModel.find({
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
