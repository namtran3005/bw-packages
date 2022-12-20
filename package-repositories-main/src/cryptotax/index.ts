import { createInitialReport } from './lib/createInitialReport';
import { findReportsByOwner } from './lib/findReportsByOwner';
import { hasReport } from './lib/hasReport';
import { findInitiatedReports } from './lib/findInitiatedReports';
import { updateState } from './lib/updateState';
import { updateReport } from './lib/updateReport';
import { findReportById } from './lib/findReportById';
import { findByYear } from './lib/findByYear';
import { countByOwner } from './lib/countByOwner';

export { CryptoTaxModel } from './model';

export const cryptoTaxRepo = {
  createInitialReport,
  findReportsByOwner,
  hasReport,
  countByOwner,
  findByYear,
  findReportById,
  updateReport,
  updateState,
  findInitiatedReports,
};
