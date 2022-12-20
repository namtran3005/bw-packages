export const chainalysisAmlReportsRepo = {
  insert: jest.fn(() => Promise.resolve(null)),
  findOneReport: jest.fn(() => Promise.resolve(null)),
};

export const ChainalysisAmlReportsModel = {
  collection: {
    name: 'chainalysis-aml-reports',
  },
};
