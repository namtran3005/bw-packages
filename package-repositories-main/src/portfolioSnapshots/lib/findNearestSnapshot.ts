import { DocumentDefinition, Model } from 'mongoose';
import { PortfolioSnapshotDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { closestTo, isEqual } from 'date-fns';

export async function findNearestSnapshot(
  owner: string,
  when: Date,
  model: Model<PortfolioSnapshotDoc, {}>
): Promise<DocumentDefinition<PortfolioSnapshotDoc> | null> {
  const leftCandidate = await model
    .findOne({
      owner,
      snapshotAt: {
        $lt: when,
      },
    })
    .sort({ snapshotAt: -1 })
    .lean()
    .exec();
  const rightCandidate = await model
    .findOne({
      owner,
      snapshotAt: {
        $gte: when,
      },
    })
    .sort({ snapshotAt: 1 })
    .lean()
    .exec();
  if (!leftCandidate) {
    return rightCandidate;
  }
  if (!rightCandidate) {
    return leftCandidate;
  }
  const closestSnapshotAt = closestTo(when, [
    leftCandidate.snapshotAt,
    rightCandidate.snapshotAt,
  ]);
  return isEqual(closestSnapshotAt, leftCandidate.snapshotAt)
    ? leftCandidate
    : rightCandidate;
}
