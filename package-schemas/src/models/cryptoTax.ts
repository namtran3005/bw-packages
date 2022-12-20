import { Document, Schema } from 'mongoose';
import {
  CryptoTaxRequestStatuses,
  CryptoTaxCountries,
  WarningOrError,
  ReportData,
  CryptoTaxTrade,
} from '@bitwala-cryptobank-squad/package-cryptotaxapi';

export interface TaxReport extends ReportData {
  warnings?: WarningOrError[];
  errors?: WarningOrError[];
}

export { CryptoTaxRequestStatuses };

export interface CryptoTaxDoc extends Document {
  owner: string;
  status: CryptoTaxRequestStatuses;
  reportId: string;
  reportYear: number;
  reportCountry: CryptoTaxCountries;
  updatedAt: string;
  createdAt: Date;
  trades: CryptoTaxTrade[];
  taxReport: TaxReport;
  deletedAt: Date;
  generateSilently?: boolean;
}

export const cryptoTaxSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    },
    status: {
      type: String,
      required: true,
    },
    reportId: {
      type: String,
      required: true,
      index: true,
    },
    reportYear: {
      type: Number,
      required: true,
    },
    reportCountry: {
      type: String,
      required: true,
    },
    trades: {
      type: Schema.Types.Mixed,
    },
    deletedAt: {
      type: Date,
    },
    taxReport: {
      type: Schema.Types.Mixed,
    },
    generateSilently: {
      type: Boolean,
    },
  },
  { timestamps: true, collection: 'cryptotax-requests' }
);
