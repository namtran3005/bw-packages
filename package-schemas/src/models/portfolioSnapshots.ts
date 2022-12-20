import { Document, Schema } from 'mongoose';

export interface PortfolioSnapshot {
  owner: string;
  snapshotAt: Date;
  btcBalance?: string;
  btcBalanceEur?: string;
  ethBalance?: string;
  ethBalanceEur?: string;
  btcLendingBalance?: string;
  btcLendingBalanceEur?: string;
  custodyBtcBalance?: string;
  custodyBtcBalanceEur?: string;
  custodyEthBalance?: string;
  custodyEthBalanceEur?: string;
  etfPvpBalance?: string;
  etfPvpBalanceEur?: string;
  etfPftBalance?: string;
  etfPftBalanceEur?: string;
  etfFgpBalance?: string;
  etfFgpBalanceEur?: string;
}

export interface PortfolioSnapshotDoc extends PortfolioSnapshot, Document {}

const portfolioSnapshotSchemaDefinition = {
  owner: {
    type: String,
    required: true,
  },
  snapshotAt: {
    type: Date,
    required: true,
    index: true,
  },
  btcBalance: {
    type: String,
    required: false,
  },
  btcBalanceEur: {
    type: String,
    required: false,
  },
  ethBalance: {
    type: String,
    required: false,
  },
  ethBalanceEur: {
    type: String,
    required: false,
  },
  btcLendingBalance: {
    type: String,
    required: false,
  },
  btcLendingBalanceEur: {
    type: String,
    required: false,
  },
  custodyBtcBalance: {
    type: String,
    required: false,
  },
  custodyBtcBalanceEur: {
    type: String,
    required: false,
  },
  custodyEthBalance: {
    type: String,
    required: false,
  },
  custodyEthBalanceEur: {
    type: String,
    required: false,
  },
  etfPvpBalance: {
    type: String,
    required: false,
  },
  etfPvpBalanceEur: {
    type: String,
    required: false,
  },
  etfPftBalance: {
    type: String,
    required: false,
  },
  etfPftBalanceEur: {
    type: String,
    required: false,
  },
  etfFgpBalance: {
    type: String,
    required: false,
  },
  etfFgpBalanceEur: {
    type: String,
    required: false,
  },
};

export const portfolioSnapshotHourlySchema: Schema = new Schema(
  portfolioSnapshotSchemaDefinition,
  { timestamps: true, collection: 'portfolio-snapshots-hourly' }
);

export const portfolioSnapshotDailySchema: Schema = new Schema(
  portfolioSnapshotSchemaDefinition,
  { timestamps: true, collection: 'portfolio-snapshots-daily' }
);

export const portfolioSnapshotWeeklySchema: Schema = new Schema(
  portfolioSnapshotSchemaDefinition,
  { timestamps: true, collection: 'portfolio-snapshots-weekly' }
);

portfolioSnapshotHourlySchema.index({
  owner: 1,
  snapshotAt: -1,
});

portfolioSnapshotDailySchema.index({
  owner: 1,
  snapshotAt: -1,
});

portfolioSnapshotWeeklySchema.index({
  owner: 1,
  snapshotAt: -1,
});
