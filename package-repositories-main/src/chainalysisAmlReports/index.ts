import { findOneReport } from './lib/findOneReport';
import { insert } from './lib/insert';

export { ChainalysisAmlReportModel } from './model';

export const chainalysisAmlReportsRepo = {
  findOneReport,
  insert,
};
