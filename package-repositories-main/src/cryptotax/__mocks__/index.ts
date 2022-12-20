export const cryptoTaxRepo = {
  createInitialReport: jest.fn(() => Promise.resolve(null)),
  findReportsByOwner: jest.fn(() => Promise.resolve(null)),
  hasReport: jest.fn(() => Promise.resolve(null)),
  countByOwner: jest.fn(() => Promise.resolve(null)),
  findByYear: jest.fn(() => Promise.resolve(null)),
  findReportById: jest.fn(() => Promise.resolve(null)),
  updateReport: jest.fn(() => Promise.resolve(null)),
  updateState: jest.fn(() => Promise.resolve(null)),
  findInitiatedReports: jest.fn(() => Promise.resolve(null)),
};
