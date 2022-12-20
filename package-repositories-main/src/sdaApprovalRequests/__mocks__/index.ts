export const sdaApprovalRequests = {
  findOneBySolarisId: jest.fn(() => Promise.resolve(null)),
  findOneByOwner: jest.fn(() => Promise.resolve(null)),
  insert: jest.fn(() => Promise.resolve(null)),
};

export const SdaApprovalRequestModel = {
  collection: {
    name: 'sda-approval-requests',
  },
};
