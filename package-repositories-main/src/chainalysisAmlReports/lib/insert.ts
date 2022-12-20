import { ChainalysisAmlReport } from '@bitwala-cryptobank-squad/package-schemas';
import { ChainalysisAmlReportModel } from '../model';

export const insert = (report: ChainalysisAmlReport) => {
  return ChainalysisAmlReportModel.create(report);
};
