/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema } from 'mongoose';

/**
 * Using strict:false to ensures that all values passed to our model saved in db
 */
export const coinfirmAmlReportSchema: Schema<any> = new Schema(undefined, {
  timestamps: true,
  strict: false,
  collection: 'coinfirm-aml-report',
});
