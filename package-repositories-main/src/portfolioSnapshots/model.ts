import mongooseLeanId from 'mongoose-lean-id';
import {
  portfolioSnapshotHourlySchema,
  portfolioSnapshotDailySchema,
  portfolioSnapshotWeeklySchema,
  PortfolioSnapshotDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

portfolioSnapshotHourlySchema.plugin(mongooseLeanId);
portfolioSnapshotDailySchema.plugin(mongooseLeanId);
portfolioSnapshotWeeklySchema.plugin(mongooseLeanId);

export const PortfolioSnapshotHourlyModel = mainConnection.db.model<
  PortfolioSnapshotDoc
>('PortfolioSnapshotsHourly', portfolioSnapshotHourlySchema);

export const PortfolioSnapshotDailyModel = mainConnection.db.model<
  PortfolioSnapshotDoc
>('PortfolioSnapshotsDaily', portfolioSnapshotDailySchema);

export const PortfolioSnapshotWeeklyModel = mainConnection.db.model<
  PortfolioSnapshotDoc
>('PortfolioSnapshotsWeekly', portfolioSnapshotWeeklySchema);
