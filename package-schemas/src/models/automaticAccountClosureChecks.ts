import { Document, Schema } from 'mongoose';

export interface AutomaticAccountClosureChecks {
  owner: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  acrChecksResult : any;
}

export type AutomaticAccountClosureChecksDoc = Document & AutomaticAccountClosureChecks;

const automaticAccountClosureChecksShape = {
  owner: {
    type: String,
    required: true,
  },
  acrChecksResult: {
    type: Schema.Types.Mixed,
    required: true
  }
};

export const automaticAccountClosureChecksSchema: Schema = new Schema(
  automaticAccountClosureChecksShape,
  { timestamps: true, collection: 'automatic-account-closure-checks' }
);
