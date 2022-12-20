import { Document, Schema } from 'mongoose';

import { Legitimation, LegitimationType } from '@bitwala-cryptobank-squad/package-solaris';

export interface SolarisLegitimationDoc extends Legitimation, Document {
  owner: string;
  createdAt: Date;
}

export const solarisLegitimationSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    },
    legitimationDocumentNumber: {
      type: String,
      index: true,
      required: true,
    },
    legitimationType: {
      type: String,
      enum: Object.values(LegitimationType),
      required: true,
    },
    legitimationIssuer: {
      type: String,
      required: true,
    },
    legitimationCountry: {
      type: String,
      required: true,
    },
    legitimationIssuedAt: {
      type: Date,
      required: true,
    },
    legitimationValidUntil: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true, collection: 'solaris-legitimations' }
);
