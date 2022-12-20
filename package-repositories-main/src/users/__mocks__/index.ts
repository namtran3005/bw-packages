import { usersRepo as original } from '../index';

export const usersRepo: {
  [K in keyof typeof original]: jest.Mock;
} = {
  fetchUsersToNotifyWithCursor: jest.fn(() => Promise.resolve(null)),
  getUserById: jest.fn(() => Promise.resolve(null)),
  getUserBySolarisAccountId: jest.fn(() => Promise.resolve(null)),
  attachAccountId: jest.fn(() => Promise.resolve(null)),
  attachPersonId: jest.fn(() => Promise.resolve(null)),
  attachReferralCode: jest.fn(() => Promise.resolve(null)),
  attachAdvocateReferralCode: jest.fn(() => Promise.resolve(null)),
  verifyUser: jest.fn(() => Promise.resolve(null)),
  unverifyUser: jest.fn(() => Promise.resolve(null)),
  toggleFreeze: jest.fn(() => Promise.resolve(null)),
  toggleClosureRequested: jest.fn(() => Promise.resolve(null)),
  attachSecret: jest.fn(() => Promise.resolve(null)),
  updateLocale: jest.fn(() => Promise.resolve(null)),
  updateMarketing: jest.fn(() => Promise.resolve(null)),
  updateTradedEUR: jest.fn(() => Promise.resolve(null)),
  updateAcceptedTerms: jest.fn(() => Promise.resolve(null)),
  updateMeta: jest.fn(() => Promise.resolve(null)),
  unsetMeta: jest.fn(() => Promise.resolve(null)),
  updateEmail: jest.fn(() => Promise.resolve(null)),
  updatePromoData: jest.fn(() => Promise.resolve(null)),
  setUTM: jest.fn(() => Promise.resolve(null)),
  setAnonymousId: jest.fn(() => Promise.resolve(null)),
  setIsInterestedInVisaCard: jest.fn(() => Promise.resolve(null)),
  setIsOnboardedInMobile: jest.fn(() => Promise.resolve(null)),
  addPushNotificationsConfig: jest.fn(() => Promise.resolve(null)),
  removePushNotificationsConfig: jest.fn(() => Promise.resolve(null)),
  updateDisabledNotifications: jest.fn(() => Promise.resolve(null)),
  updateMobileAppPlatform: jest.fn(() => Promise.resolve(null)),
  getUserBySolarisPersonSolarisId: jest.fn(() => Promise.resolve(null)),
  getUserByReferralCode: jest.fn(() => Promise.resolve(null)),
  getUserByReferralCodeTalonOneOwn: jest.fn(() => Promise.resolve(null)),
  getUserByVerifiedEmail: jest.fn(() => Promise.resolve(null)),
  addReferredUser: jest.fn(() => Promise.resolve(null)),
  updateReferredUser: jest.fn(() => Promise.resolve(null)),
  updateSynchedWithSolarisAt: jest.fn(() => Promise.resolve(null)),
  getAllUserIdsByEvent: jest.fn(() => Promise.resolve(null)),
  saveComplianceSignedAt: jest.fn(() => Promise.resolve(null)),
  addAppRating: jest.fn(() => Promise.resolve(null)),
  acceptCryptoTaxTermsAndConditions: jest.fn(() => Promise.resolve(null)),
  disableSegmentEvent: jest.fn(() => Promise.resolve(null)),
  getUsersWithTradesCursor: jest.fn(() => Promise.resolve(null)),
  addHasSeenUpdateSODescriptionWidget: jest.fn(() => Promise.resolve(null)),
  getHasSeenUpdateSODescriptionWidget: jest.fn(() => Promise.resolve(null)),
  incrementTimesHasSeenCustodyInfo: jest.fn(() => Promise.resolve(null)),
  getTimesHasSeenCustodyInfo: jest.fn(() => Promise.resolve(null)),
  updateSdaEntityId: jest.fn(() => Promise.resolve(null)),
  setKycReminder: jest.fn(() => Promise.resolve(null)),
  setKycReminderStatus: jest.fn(() => Promise.resolve(null)),
  getPendingKycReminderInOneHourUserIds: jest.fn(() => Promise.resolve(null)),
  getPendingKycReminderOthersUserIds: jest.fn(() => Promise.resolve(null)),
  setReferralComplete: jest.fn(() => Promise.resolve(null)),
  fetchUsersToNotifyBatchedCursor: jest.fn(() => Promise.resolve(null)),
  addCustodyTermsAndConditionsSignedAt: jest.fn(() => Promise.resolve(null)),
  updateReceivedPushNotificationsField: jest.fn(() => Promise.resolve(null)),
  updateReferralComplete: jest.fn(() => Promise.resolve(null)),
  getUserBySdaEntityId: jest.fn(() => Promise.resolve(null)),
  updateSdaEntityStatusBySdaEntityId: jest.fn(() => Promise.resolve(null)),
  updateSdaEntityInfo: jest.fn(() => Promise.resolve(null)),
  setReferralModalFired: jest.fn(() => Promise.resolve(null)),
  getUserByEmail: jest.fn(() => Promise.resolve(null)),
  dismissFraudWarning: jest.fn(() => Promise.resolve(null)),
  attachBvdhId: jest.fn(() => Promise.resolve(null)),
  getUserIdsBeforeCreatedAt: jest.fn(() => Promise.resolve(null)),
  setReceiveEthWarningChoice: jest.fn(() => Promise.resolve(null)),
  getUserByBvdhId: jest.fn(() => Promise.resolve(null)),
  updateTradingLimit: jest.fn(() => Promise.resolve(null)),
  setLoggedInBefore: jest.fn(() => Promise.resolve(null)),
  getUserByIdLast5Digits: jest.fn(() => Promise.resolve(null)),
  setCddEmailSentAt: jest.fn(() => Promise.resolve(null)),
  getUsersWithAcceptedTCs: jest.fn(() => Promise.resolve(null)),
  updateRollingTradingVolume: jest.fn(() => Promise.resolve(null)),
  findAllByUserIds: jest.fn(() => Promise.resolve(null)),
};
