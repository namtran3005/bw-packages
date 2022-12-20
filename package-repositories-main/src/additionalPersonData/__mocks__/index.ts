export const additionalPersonDataRepo = {
  findOneByUserID: jest.fn(() => Promise.resolve(null)),
  upsert: jest.fn(() => Promise.resolve(null)),
};

export const AdditionalPersonDataModel = {
  collection: {
    name: 'additional-person-data',
  },
};
