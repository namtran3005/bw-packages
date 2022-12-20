import { getUserById } from './lib/getUserById';
import { getUserBySolarisAccountId } from './lib/getUserBySolarisAccountId';
import { attachAccountId } from './lib/attachAccountId';
import { attachPersonId } from './lib/attachPersonId';
import { attachReferralCode } from './lib/attachReferralCode';
import { verifyUser } from './lib/verifyUser';
import { unverifyUser } from './lib/unverifyUser';
import { toggleFreeze } from './lib/toggleFreeze';
import { toggleClosureRequested } from './lib/toggleClosureRequested';
import { attachSecret } from './lib/attachSecret';
import { updateLocale } from './lib/updateLocale';
import { updateMarketing } from './lib/updateMarketing';
import { updateTradedEUR } from './lib/updateTradedEUR';
import { updateAcceptedTerms } from './lib/updateAcceptedTerms';
import { updateMeta } from './lib/updateMeta';
import { unsetMeta } from './lib/unsetMeta';
import { updateEmail } from './lib/updateEmail';
import { updatePromoData } from './lib/updatePromoData';
import { setUTM } from './lib/setUTM';
import { setAnonymousId } from './lib/setAnonymousId';
import { setCddEmailSentAt } from './lib/setCddEmailSentAt';
import { setIsInterestedInVisaCard } from './lib/setIsInterestedInVisaCard';
import { setIsOnboardedInMobile } from './lib/setIsOnboardedInMobile';
import { addPushNotificationsConfig } from './lib/addPushNotificationsConfig';
import { removePushNotificationsConfig } from './lib/removePushNotificationsConfig';
import { updateDisabledNotifications } from './lib/updateDisabledNotifications';
import { updateMobileAppPlatform } from './lib/updateMobileAppPlatform';
import { getUserBySolarisPersonSolarisId } from './lib/getUserBySolarisPersonSolarisId';
import { getUserByReferralCode } from './lib/getUserByReferralCode';
import { getUserByReferralCodeTalonOneOwn } from './lib/getUserByReferralCodeTalonOneOwn';
import { getUserByVerifiedEmail } from './lib/getUserByVerifiedEmail';
import { addReferredUser } from './lib/addReferredUser';
import { updateReferredUser } from './lib/updateReferredUser';
import { updateSynchedWithSolarisAt } from './lib/updateSynchedWithSolarisAt';
import { getAllUserIdsByEvent } from './lib/getAllUserIdsByEvent';
import { saveComplianceSignedAt } from './lib/saveComplianceSignedAt';
import { addAppRating } from './lib/addAppRating';
import { fetchUsersToNotifyWithCursor } from './lib/fetchUsersToNotifyWithCursor';
import { disableSegmentEvent } from './lib/disableSegmentEvent';
import { acceptCryptoTaxTermsAndConditions } from './lib/acceptCryptoTaxTermsAndConditions';
import { getUsersWithTradesCursor } from './lib/getUsersWithTradesCursor';
import { addHasSeenUpdateSODescriptionWidget } from './lib/addHasSeenUpdateSODescriptionWidget';
import { getHasSeenUpdateSODescriptionWidget } from './lib/getHasSeenUpdateSODescriptionWidget';
import { incrementTimesHasSeenCustodyInfo } from './lib/incrementTimesHasSeenCustodyInfo';
import { getTimesHasSeenCustodyInfo } from './lib/getTimesHasSeenCustodyInfo';
import { updateSdaEntityId } from './lib/updateSdaEntityId';
import { setReferralComplete } from './lib/setReferralComplete';
import { fetchUsersToNotifyBatchedCursor } from './lib/fetchUsersToNotifyBatchedCursor';
import { setKycReminder } from './lib/setKycReminder';
import { setKycReminderStatus } from './lib/setKycReminderStatus';
import { getPendingKycReminderOthersUserIds } from './lib/getPendingKycReminderOthersUserIds';
import { getPendingKycReminderInOneHourUserIds } from './lib/getPendingKycReminderInOneHourUserIds';
import { addCustodyTermsAndConditionsSignedAt } from './lib/addCustodyTermsAndConditionsSignedAt';
import { updateReceivedPushNotificationsField } from './lib/updateReceivedPushNotificationsField';
import { updateReferralComplete } from './lib/updateReferralComplete';
import { getUserBySdaEntityId } from './lib/getUserBySdaEntityId';
import { updateSdaEntityStatusBySdaEntityId } from './lib/updateSdaEntityStatusBySdaEntityId';
import { updateSdaEntityInfo } from './lib/updateSdaEntityInfo';
import { setReferralModalFired } from './lib/setReferralModalFired';
import { getUserByEmail } from './lib/getUserByEmail';
import { dismissFraudWarning } from './lib/dismissFraudWarning';
import { attachBvdhId } from './lib/attachBvdhId';
import { getUserIdsBeforeCreatedAt } from './lib/getUserIdsBeforeCreatedAt';
import { setReceiveEthWarningChoice } from './lib/setReceiveEthWarningChoice';
import { getUserByBvdhId } from './lib/getUserByBvdhId';
import { updateTradingLimit } from './lib/updateTradingLimit';
import { setLoggedInBefore } from './lib/setLoggedInBefore';
import { getUserByIdLast5Digits } from './lib/getUserByIdLast5Digits';
import { attachAdvocateReferralCode } from './lib/attachAdvocateReferralCode';
import { getUsersWithAcceptedTCs } from './lib/getUsersWithAcceptedTCs';
import { updateRollingTradingVolume } from './lib/updateRollingTradingVolume';
import { findAllByUserIds } from './lib/findAllByUserIds';

export { UserModel } from './model';

export const usersRepo = {
  fetchUsersToNotifyWithCursor,
  getUserById,
  getUserBySolarisAccountId,
  attachAccountId,
  attachPersonId,
  attachReferralCode,
  attachAdvocateReferralCode,
  verifyUser,
  unverifyUser,
  toggleFreeze,
  toggleClosureRequested,
  attachSecret,
  updateLocale,
  updateMarketing,
  updateTradedEUR,
  updateAcceptedTerms,
  updateMeta,
  unsetMeta,
  updateEmail,
  updatePromoData,
  setUTM,
  setAnonymousId,
  setCddEmailSentAt,
  setIsInterestedInVisaCard,
  setIsOnboardedInMobile,
  addPushNotificationsConfig,
  removePushNotificationsConfig,
  updateDisabledNotifications,
  updateMobileAppPlatform,
  getUserBySolarisPersonSolarisId,
  getUserByReferralCode,
  getUserByReferralCodeTalonOneOwn,
  getUserByVerifiedEmail,
  addReferredUser,
  updateReferredUser,
  updateSynchedWithSolarisAt,
  getAllUserIdsByEvent,
  saveComplianceSignedAt,
  addAppRating,
  acceptCryptoTaxTermsAndConditions,
  disableSegmentEvent,
  getUsersWithTradesCursor,
  addHasSeenUpdateSODescriptionWidget,
  getHasSeenUpdateSODescriptionWidget,
  incrementTimesHasSeenCustodyInfo,
  getTimesHasSeenCustodyInfo,
  updateSdaEntityId,
  setKycReminder,
  setKycReminderStatus,
  getPendingKycReminderInOneHourUserIds,
  getPendingKycReminderOthersUserIds,
  setReferralComplete,
  fetchUsersToNotifyBatchedCursor,
  addCustodyTermsAndConditionsSignedAt,
  updateReceivedPushNotificationsField,
  updateReferralComplete,
  getUserBySdaEntityId,
  updateSdaEntityStatusBySdaEntityId,
  updateSdaEntityInfo,
  setReferralModalFired,
  getUserByEmail,
  dismissFraudWarning,
  attachBvdhId,
  getUserIdsBeforeCreatedAt,
  setReceiveEthWarningChoice,
  getUserByBvdhId,
  updateTradingLimit,
  setLoggedInBefore,
  getUserByIdLast5Digits,
  getUsersWithAcceptedTCs,
  updateRollingTradingVolume,
  findAllByUserIds,
};
