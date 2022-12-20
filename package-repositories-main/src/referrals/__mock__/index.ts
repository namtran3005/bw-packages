export const referralsRepo = {
  insert: jest.fn(() => Promise.resolve(null)),
  getReferralByParentId: jest.fn(() => Promise.resolve(null)),
  getReferralByChildId: jest.fn(() => Promise.resolve(null)),
  getReferralByE2E: jest.fn(() => Promise.resolve(null)),
  updateReferral: jest.fn(() => Promise.resolve(null)),
};
