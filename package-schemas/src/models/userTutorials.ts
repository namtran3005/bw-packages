import { Document, Schema } from 'mongoose';

export interface UserTutorials {
  owner?: string;
  wealthPortfolioItemsTutorial?: WealthPortfolioItemsTutorial;
}

export interface WealthPortfolioItemsTutorial {
  timesSeen?: number;
  lastSeenAt?: Date;
}

export type UserTutorialsDoc = Document &
  UserTutorials & {
    createdAt: Date;
    updatedAt: Date;
  };

export const userTutorialsWealthPortfolioItemsTutorialSchema: Schema = new Schema(
  {
    timesSeen: {
      type: Number,
      required: false,
    },
    lastSeenAt: {
      type: Date,
      required: false,
    },
  },
  { _id: false }
);

export const userTutorialsSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    },
    wealthPortfolioItemsTutorial: {
      type: userTutorialsWealthPortfolioItemsTutorialSchema,
      required: false,
    },
  },
  { timestamps: true, collection: 'user-tutorials' }
);
