import { Document, Schema } from 'mongoose';
import {
  AssetLoose,
  Rating,
  Cluster,
} from '@bitwala-cryptobank-squad/package-chainalysis-api';

export enum TransactionCollectionName {
  EthereumTransactions = 'ethereum-transactions',
  BitcoinTransactions = 'bitcoin-transactions',
}

export interface Transaction {
  /**
   * The collection the `documentId` links to.
   * @example
   * ethereum-transactions
   */
  collectionName: TransactionCollectionName;
  /** The corresponding document id (`id`). */
  documentId: string;
}

export const ClusterSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    _id: false,
  }
);

export const TransactionSchema = new Schema(
  {
    collectionName: {
      type: String,
      enum: Object.values(TransactionCollectionName),
      required: true,
    },
    documentId: { type: String, required: true },
  },
  {
    _id: false,
  }
);

export interface ChainalysisAmlReport {
  /** The Chainalysis userId */
  userId: string;
  asset: AssetLoose;
  transferReference: string;
  rating?: Rating | null;
  cluster?: Cluster | null;
  transaction?: Transaction | null;
}

export interface ChainalysisAmlReportDoc
  extends ChainalysisAmlReport,
    Document {
  createdAt: Date;
}

export const chainalysisAmlReportSchema: Schema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },
    asset: {
      type: String,
      required: true,
    },
    transferReference: {
      type: String,
      required: true,
      index: true,
    },
    rating: {
      type: String,
      enum: Object.values(Rating),
    },
    cluster: {
      type: ClusterSchema,
    },
    transaction: {
      type: TransactionSchema,
    },
  },
  { timestamps: true, collection: 'chainalysis-aml-reports' }
);
