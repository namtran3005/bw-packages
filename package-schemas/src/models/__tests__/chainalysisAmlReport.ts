import * as Mongoose from 'mongoose';
import { Error } from 'mongoose';
import { Rating } from '@bitwala-cryptobank-squad/package-chainalysis-api';
import {
  ChainalysisAmlReport,
  chainalysisAmlReportSchema,
  TransactionCollectionName,
} from '../chainalysisAmlReport';

describe('chainalysisAmlReport', () => {
  it('should return errors as undefined after sync validation', () => {
    const report: ChainalysisAmlReport = {
      userId: 'BTC_01',
      asset: 'BTC',
      transferReference:
        '2d9bfc3a47c2c9cfd0170198782979ed327442e5ed1c8a752bced24d490347d4:1H7aVb2RZiBmdbnzazQgVj2hWR3eEZPg6v',
      rating: Rating.LowRisk,
      cluster: {
        name: 'Coinbase.com',
        category: 'exchange',
      },
      transaction: {
        collectionName: TransactionCollectionName.BitcoinTransactions,
        documentId: '123',
      },
    };

    const Model = Mongoose.model(
      'ChainalysisAmlReport',
      chainalysisAmlReportSchema
    );
    const chainalysisAmpReport = new Model(report);

    const error = chainalysisAmpReport.validateSync();
    expect(error).toBeUndefined();
  });

  it('should return error after sync validation when user id is missing', () => {
    const reportWithMissingUserId = {
      asset: 'BTC',
      transferReference:
        '2d9bfc3a47c2c9cfd0170198782979ed327442e5ed1c8a752bced24d490347d4:1H7aVb2RZiBmdbnzazQgVj2hWR3eEZPg6v',
      rating: Rating.LowRisk,
      cluster: {
        name: 'Coinbase.com',
        category: 'exchange',
      },
    } as ChainalysisAmlReport;

    const Model = Mongoose.model(
      'ChainalysisAmlReport',
      chainalysisAmlReportSchema
    );
    const chainalysisAmpReport = new Model(reportWithMissingUserId);

    const error = chainalysisAmpReport.validateSync();
    expect(error).toBeInstanceOf(Error.ValidationError);
  });

  it('should return error after sync validation when transaction document id is missing', () => {
    const reportWithMissingTransactionDocumentId = {
      asset: 'BTC',
      transferReference:
        '2d9bfc3a47c2c9cfd0170198782979ed327442e5ed1c8a752bced24d490347d4:1H7aVb2RZiBmdbnzazQgVj2hWR3eEZPg6v',
      rating: Rating.LowRisk,
      cluster: {
        name: 'Coinbase.com',
        category: 'exchange',
      },
      transaction: {
        collectionName: TransactionCollectionName.BitcoinTransactions,
      },
    } as ChainalysisAmlReport;

    const Model = Mongoose.model(
      'ChainalysisAmlReport',
      chainalysisAmlReportSchema
    );
    const chainalysisAmpReport = new Model(
      reportWithMissingTransactionDocumentId
    );

    const error = chainalysisAmpReport.validateSync();
    expect(error).toBeInstanceOf(Error.ValidationError);
  });
});
